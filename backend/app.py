from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import os
import numpy as np
from astroquery.gaia import Gaia

app = Flask(__name__)
CORS(app)

# Path to your CSV file
CSV_FILE_PATH = './data/Planets.csv'
exoplanets_table = None
# Scale the distance
distance_scaler = 10


# Function to read the csv
def read_csv():
    global exoplanets_table
    if os.path.exists(CSV_FILE_PATH):
        exoplanets_table = pd.read_csv(CSV_FILE_PATH)

    
# Read the csv  
read_csv()

def generate_query(index,view_distance):
    global exoplanets_table

    planet_data = exoplanets_table.iloc[index]
    sy_dist = float(planet_data["sy_dist"])

    if index==0:
        query = f"""
        SELECT ra,dec,distance_gspphot
        FROM gaiadr3.gaia_source
        WHERE distance_gspphot < {view_distance};
            """
    else:
        near = sy_dist - float(view_distance)
        far = sy_dist + float(view_distance)
        if near<0:
            query = f"""
            SELECT ra,dec,distance_gspphot
            FROM gaiadr3.gaia_source
            WHERE distance_gspphot < {far};
                """
        else:
            angle = np.arctan(view_distance/(sy_dist))
            query = f"""
            SELECT ra,dec,distance_gspphot
            FROM gaiadr3.gaia_source
            WHERE
            CONTAINS(
            POINT('ICRS',gaiadr3.gaia_source.ra,gaiadr3.gaia_source.dec),
            CIRCLE('ICRS',{planet_data["ra"]},{planet_data["dec"]},{angle}))=1
            AND (distance_gspphot > {near})
            AND (distance_gspphot < {far});
            """ 
    return query


def get_exo_stars(index,view_distance):
    global exoplanets_table
    global distance_scaler
    query = generate_query(index,view_distance)
    # Launch async job
    job = Gaia.launch_job_async(query)
    results = job.get_results()

    # Convert to Pandas DataFrame
    results = results.to_pandas()

    # Get relevant columns
    ra = np.radians(results["ra"])  # Convert to radians
    dec = np.radians(results["dec"])  # Convert to radians
    distance_gspphot = results["distance_gspphot"]

    # Calculate x, y, z coordinates from ra dec distance_gspphot
    x = distance_gspphot * np.cos(dec) * np.cos(ra) * distance_scaler
    y = distance_gspphot * np.sin(dec) * distance_scaler
    z = distance_gspphot * np.cos(dec) * np.sin(ra) * distance_scaler

    # Drop the original columns
    results.drop(columns=["ra", "dec", "distance_gspphot"], inplace=True)

    # Add new x, y, z columns to the DataFrame
    results["x"] = x
    results["y"] = y
    results["z"] = z


    # print(results)
    return results

# def get_earth_stars(view_distance):
# def get_exo_stars_in(view_distance):

# Just to know that the backend is running and accessible
@app.route("/")
def home():
    return jsonify("ExoSky Home")

@app.route('/exoview', methods=['GET'])  # Keep it as GET
def submit():
    global exoplanets_table
    try:
        # Get index from query parameters
        # index = request.args.get('index', default=30, type=int)
        # view_distance = request.args.get('view_distance', default=100, type=int)
        data = request.get_json()  # Use request.get_json() to retrieve JSON data
        index = data.get('index')
        view_distance = data.get('view_distance')
        index = int(index)
        view_distance = int(view_distance)
        print("index type",type(index))
        print(f"Requested index: {index}")
        print(f"Requested view distance: {view_distance}")
        if exoplanets_table is None:
            read_csv()
        
        if exoplanets_table is None:
            print("Table not found")
            return "Table not found", 404
        
        if exoplanets_table.empty:
            print("CSV is empty or not found")
            return "CSV is empty", 404
        
        if index < len(exoplanets_table):
            print(exoplanets_table.iloc[index])
            print("index: ",index)
            print("view_distance",view_distance)
            stars = get_exo_stars(index, view_distance)
            return stars.to_json()
        else:
            return f"Index {index} out of range", 400

    except KeyError as e:
        return f"Invalid request: Missing {e}", 400
    except Exception as e:
        return f"Error: {e}", 500
    

@app.route('/load_csv', methods=['GET'])
def load_csv():
        global exoplanets_table
        global distance_scaler
        try:
            if exoplanets_table is None:
                read_csv()
            
            if exoplanets_table is None:
                print("Table not found")
                return "Table not found", 404
            
            if exoplanets_table.empty:
                print("CSV is empty or not found")
                return "CSV is empty", 404
            
            # Get relevant columns
            ra = np.radians(exoplanets_table["ra"])  # Convert to radians
            dec = np.radians(exoplanets_table["dec"])  # Convert to radians
            sy_dist = exoplanets_table["sy_dist"]

            # Calculate x, y, z coordinates from ra dec distance_gspphot
            x = sy_dist * np.cos(dec) * np.cos(ra) * distance_scaler
            y = sy_dist * np.sin(dec) * distance_scaler
            z = sy_dist * np.cos(dec) * np.sin(ra) * distance_scaler
        
            sliced_exoplanets_table = exoplanets_table.drop(columns=["ra", "dec", "sy_dist"], inplace=False)

            # Add new x, y, z columns to the DataFrame
            sliced_exoplanets_table["x"] = x
            sliced_exoplanets_table["y"] = y
            sliced_exoplanets_table["z"] = z

            print(sliced_exoplanets_table)

            return sliced_exoplanets_table.to_json()

        except KeyError as e:
            return f"Invalid request: Missing {e}", 400
        except Exception as e:
            return f"Error: {e}", 500

if __name__ == "__main__":
    app.run(debug=True)
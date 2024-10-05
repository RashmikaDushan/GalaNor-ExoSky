from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Path to your CSV file
CSV_FILE_PATH = './data/Planets.csv'
exoplanets_table = None

# Function to read the csv
def read_csv():
    global exoplanets_table
    if os.path.exists(CSV_FILE_PATH):
        exoplanets_table = pd.read_csv(CSV_FILE_PATH)

    
# Read the csv  
read_csv()

@app.route("/") # Just to know that the backend is running and accessible
def home():
    return jsonify("ExoSky Home")


if __name__ == "__main__":
    app.run(debug=True)
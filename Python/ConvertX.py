import numpy as np

def convert_coordinates(Ra, Qa1, Qa2, Rb, Qb1, Qb2):
    # Convert to Cartesian coordinates
    xa, ya, za = Ra * np.array([np.cos(Qa2) * np.cos(Qa1), np.cos(Qa2) * np.sin(Qa1), np.sin(Qa2)])
    xb, yb, zb = Rb * np.array([np.cos(Qb2) * np.cos(Qb1), np.cos(Qb2) * np.sin(Qb1), np.sin(Qb2)])

    # Relative position
    x_rel, y_rel, z_rel = xb - xa, yb - ya, zb - za

    # Calculate distance R and angles Q1, Q2
    R = np.sqrt(x_rel**2 + y_rel**2 + z_rel**2)
    Q2 = np.arcsin(z_rel / R) if R != 0 else 0
    Q1 = np.arctan2(y_rel, x_rel)

    return R, Q1, Q2

# Example usage
#Ra, Qa1, Qa2 = 1.0, np.radians(30), np.radians(45)
#Rb, Qb1, Qb2 = 2.0, np.radians(90), np.radians(30)

Ra, Qa1, Qa2 = 1.0, np.radians(0), np.radians(9.9)
Rb, Qb1, Qb2 = 2.0, np.radians(0), np.radians(0)

R, Q1, Q2 = convert_coordinates(Ra, Qa1, Qa2, Rb, Qb1, Qb2)

print(f"Distance (R): {R}")
print(f"Right Ascension (Q1): {np.degrees(Q1)} degrees")
print(f"Declination (Q2): {np.degrees(Q2)} degrees")

# ----------------------- New Function --------------------

def toCartesian(ra, dec, distant):
    # Convert RA and Dec to radians
    ra_rad = np.radians(ra)
    dec_rad = np.radians(dec)
    
    # Apply the conversion formulas
    num_x = distance * np.cos(dec_rad) * np.cos(ra_rad)
    num_y = distance * np.cos(dec_rad) * np.sin(ra_rad)
    num_z = distance * np.sin(dec_rad)
    
    return np.array(num_x, num_y, num_z)

    
def getDifference(star_array, planet_array):
    star_x, star_y, star_z = star_array
    planet_x, planet_y, planet_z = planet_array
    
    rel_x = star_x - planet_x
    rel_y = star_y - planet_y
    rel_z = star_z - planet_z
    
    return np.array([rel_x, rel_y, rel_z])
import numpy as np

def spherical_to_cartesian(r, theta, phi):
    x = r * np.sin(phi) * np.cos(theta)
    y = r * np.sin(phi) * np.sin(theta)
    z = r * np.cos(phi)
    return np.array([x, y, z])

def cartesian_to_spherical(x, y, z):
    r = np.sqrt(x**2 + y**2 + z**2)
    theta = np.arctan2(y, x)
    phi = np.arccos(z / r)
    return r, theta, phi

def Convert(Ra, Qa1, Qa2, Rb, Qb1, Qb2):
    # Convert A and B spherical coordinates to Cartesian
    A_cartesian = spherical_to_cartesian(Ra, Qa1, Qa2)
    B_cartesian = spherical_to_cartesian(Rb, Qb1, Qb2)
    
    # Compute the relative vector
    C_cartesian = B_cartesian - A_cartesian
    
    # Convert back to spherical coordinates
    R, Q1, Q2 = cartesian_to_spherical(*C_cartesian)
    
    #return R, Q1, Q2
    return R, Q1*180/np.pi, Q2*180/np.pi

# Example Usage:
#Ra, Qa1, Qa2 = 5, np.pi / 4, np.pi / 3
#Rb, Qb1, Qb2 = 8, np.pi / 6, np.pi / 4

Ra, Qa1, Qa2 = 2.9, 0, np.pi * 9.9/ 180
Rb, Qb1, Qb2 = 2 , 0 , 0

#Ra, Qa1, Qa2 = 1.0 , np.pi * 30/180, np.pi * 45/ 180
#Rb, Qb1, Qb2 = 2.0 , np.pi * 90/180 , np.pi * 30/180

R, Q1, Q2 = Convert(Ra, Qa1, Qa2, Rb, Qb1, Qb2)
print(Ra,Qa1,Qa2)
print("Resultant Spherical Coordinates:", R, Q1, Q2)

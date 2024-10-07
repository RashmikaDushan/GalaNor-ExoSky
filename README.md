# BIFROST - Visualizing the Night Sky from Exoplanets

## Challenge Overview
What would the night sky look like from an exoplanet? Our project for EXOSKY! The Exosky challenge encourages us to create a webapp that visualizes the night sky as seen from any of the 5500+ exoplanets.

## Introduction to the Project
*BIFROST* is an educational tool/ web app designed to visualize the night sky from the perspective of various exoplanets. Through this platform, users can select an exoplanet and view an interactive star map.

## Project Goal
The goal is to develop a 3D star map, enabling users to explore exoplanet sky view. This project combines scientific data with creativity, providing an engaging educational experience that allows users to imagine the galaxy from new perspectives.

## What exactly dose it do?
Initially, the website provides a view of an exoplanet from Earth, allowing users to familiarize themselves with its position. Once an exoplanet is selected, the site displays the night sky from that perspective and provides a map of stars visible from that exoplanet.

## How It Works

**Steps**

1. *Go to BIFROST home page and click on the Earth*
   - User interacts with the frontend.

2. *Earth will zoom in and side tab will appear*
   
2. *Then click on the "go to sky view" button and request to load Earth’s view of exoplanets*
   - Frontend requests the backend to load Earth's view of the exoplanets.
   - Backend responds with Earth’s exoplanet view data (coordinates, names, etc.).

3. *Display exoplanets on the UI*
   - The frontend displays Earth's view of exoplanets to the user.

4. *Click on the selected exoplanet*
   - Frontend sends a request to the backend with the selected exoplanet's index and view distance.
   - Backend processes the request:
     - Fetches the x, y, z coordinates of the exoplanet.
     - Filters stars and exoplanets included in the exoplanet view sphere based on the view distance.
   - Backend sends the data (exoplanet coordinates and filtered stars/exoplanets) to the frontend.

5. *Show sky map of the exoplanet on the UI*
   - Frontend displays the selected exoplanet’s sky map.

## What benefits does it have?
The webapp enhances educational engagement by helping students understand astronomy from a new perspective. It offers a unique method for visualizing star maps based on real data. Additionally, it encourages creativity by allowing users to create their own constellations.

## What do you hope to achieve?

1. Quality Education (SDG 4)
- Provide an innovative tool to enhance student understanding of astronomy and encourage interest in science through interactive experiences. By allowing students to visualize the night sky from different exoplanets, we foster curiosity and a deeper understanding of space and science.

2. Industry, Innovation, and Infrastructure (SDG 9)
- Use advanced technologies to inspire innovation in educational tools, making scientific concepts more accessible to students and educators. The application leverages modern technologies like star catalogs and interactive web tools to make complex astronomical data more understandable and engaging.

3. Sustainable Cities and Communities (SDG 11)
- Promote awareness of our place in the universe to encourage global citizenship and environmental responsibility. By visualizing the cosmos and our place within it, the app encourages users to think globally and understand the importance of sustainability and environmental stewardship.

4. Partnerships for the Goals (SDG 17)
- Collaborate with others to expand access to astronomical resources and maximize project impact. Through partnerships with educational institutions and astronomical organizations, we aim to broaden access to the app and its resources, reaching a wider audience.

## What tools, coding languages, hardware, or software did you use to develop your project?

<table>
  <tr>
    <th>Category</th>
    <th>Backend</th>
    <th>Frontend</th>
    <th>Data Preparation</th>
  </tr>
  <tr>
    <td><strong>Languages</strong></td>
    <td>Python</td>
    <td>JavaScript</td>
    <td>Python</td>
  </tr>
  <tr>
    <td><strong>Frameworks</strong></td>
    <td>Flask</td>
    <td>React</td>
    <td>-</td>
  </tr>
  <tr>
    <td><strong>Libraries</strong></td>
    <td>Pandas, Gaia DR3, NumPy</td>
    <td>Three.js, Bootstrap</td>
    <td>Pandas, NumPy</td>
  </tr>
  <tr>
    <td><strong>Software</strong></td>
    <td colspan="3">Visual Studio Code, Jupyter Notebook, MS 365</td>   
  </tr>
  <tr>
    <td><strong>Hardware</strong></td>
    <td colspan="3">Laptops</td>
  </tr>
</table>

## Additional Information

### Exoplanetary Celestial Sphere Volume Identification

![Exoplanetary Celestial Sphere Volume Identification](https://github.com/RashmikaDushan/GalaNor-ExoSky/blob/documentation/Images/Screenshot%202024-10-06%20084618.png)

### Key Scenarios for Data Filtering in Star Map Generation

Main three scenarios shall be considered by the backend when filtering the data to generate the star map as per the request comes from the frontend.

**Scenario 01**

Sky view from the Earth (Celestial Sphere of Earth)

![Sky view from the Earth](https://github.com/RashmikaDushan/GalaNor-ExoSky/blob/documentation/Images/Picture2.png)

**Scenario 02**

Earth within the Explanatory Celestial Sphere

![Earth within the Explanatory Celestial Sphere](https://github.com/RashmikaDushan/GalaNor-ExoSky/blob/documentation/Images/Picture3.png)

**Scenario 03**

Earth within the Explanatory Celestial Sphere

![Earth within the Explanatory Celestial Sphere](https://github.com/RashmikaDushan/GalaNor-ExoSky/blob/documentation/Images/Picture4.png)

Activity Diagram

![Activity Diagram](https://github.com/RashmikaDushan/GalaNor-ExoSky/blob/documentation/Images/Nasa%20Space%20Apps%20Challenge%203.png)

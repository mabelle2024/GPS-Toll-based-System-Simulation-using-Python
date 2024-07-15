# GPS-TOLL-based-system
GPS Toll based System
The proposed project aims to automate the toll collection system, eliminating the need for traditional toll gates. This innovative system enhances efficiency compared to the existing manual toll collection methods. By streamlining the toll collection process, it significantly reduces the time required for vehicles to pass through, leading to smoother traffic flow and reduced congestion. This not only saves time for commuters but also contributes to lower emissions due to less idling and stop-and-go traffic. The automated toll system represents a significant advancement in transportation infrastructure, providing a seamless and more effective solution for toll collection.
The automation also decreases vehicle emissions caused by idling and frequent stops, contributing to environmental sustainability.

*Note that the attached project is running on simulated Vehicle objects and can be edited to accept real time gps pings from actual vehicles, once all vehicles have the provision to transmit these pings.

Installation process:
For main code: (actual project)
Download the geojson file for toll road data (can use any geojson file with toll data to scale the program)
Download the json file to get vehicle details, or use you can use the cardealershipdb in Visual Studio Code to create and access your own vehicle details database.
When using the jupyter program make sure to paste you actual path to the geojson and json files as well as your own google api key.
Run the code in jupyter, the output will be printed under the running cell and the map as well as excel sheet with the real time saved data will be found in the directory in which the program is run.


For database provided: (for car dealers to enter vehicle and owner details in a user friendly manner, and it will get converted to json file for running the main code)

Install Visual Studio Code and Node.js. After downloading all the files into cardealshipdb folder, run the server.js and then open the live server to access the front end. 
Else directly downlaod the customer.json file for the vehicle details.


Basic Markdown Syntax
Libraries
folium: Interactive maps
random: Random number generation
json: JSON data handling
datetime: Date and time handling
shapely.geometry: Geometric operations
shapely.ops: Geometric operations
geopandas: Geospatial data handling
requests: HTTP requests
time: Time-related functions

 Load GeoJSON
 Load file and re-project to UTM

 Map Initialization
 Center map around centroid

 Add Route Function
 Adds LineString or MultiLineString routes to map

 Add Routes
 Apply route addition to GeoDataFrame

 Save Map
 Save map to HTML

 Nearest Point Function
 Finds nearest point on routes to GPS ping

 Distance Calculation Function
 Calculates distance between two points

 Get Address Function
 Retrieves address from coordinates using Google Maps API


 Vehicle Class
 Represents vehicle on mapped route
 Attributes: vehicle_no, owner, bank_account, vehicle_type, current_ping, total_distance, previous_point, marker, api_key
 Methods: update_marker, update_location, calculate_toll, reset

 Track Vehicles Function
 Tracks multiple vehicles on map

 Load Vehicles from JSON
 Loads vehicle data from JSON file


 Initialize Map and Routes
 Add routes to map

 Load Vehicles
 Load vehicles from JSON file

 Add Vehicle Markers
 Add markers for each vehicle on map

THIS IS THE PRESENTATION URL:
https://docs.google.com/presentation/d/1oDWdpmH7wco0tbfBOPsKAcDaPdVhcfwx/edit?usp=sharing&ouid=102194741991869562597&rtpof=true&sd=true

 Save Map with Markers
 Save map with vehicle markers to HTML


 Track Vehicles
 Begin tracking vehicle locations

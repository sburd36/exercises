"use strict";

//live feed of Seattle 911 Police Incidents
const dataURL = "https://data.seattle.gov/resource/pu5n-trf4.json?$order=event_clearance_date%20DESC&$where=event_clearance_date%20is%20not%20null"

//your MapBox access tokne
mapboxgl.accessToken = 'paste your mapbox access token here';


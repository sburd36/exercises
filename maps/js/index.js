"use strict";

//live feed of Seattle 911 Police Incidents
const dataURL = "https://data.seattle.gov/resource/pu5n-trf4.json?$order=event_clearance_date%20DESC&$where=event_clearance_date%20is%20not%20null"

//your MapBox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJzdGVhcm5zIiwiYSI6ImNqYTQ4ajE5dzdvZW4zM3BnaXRocmM2c2IifQ.yiidEJ97KdgH3vA1X2qLAw';

/**
 * Handles responses from the fetch() API.
 * The iTunes API always returns JSON, even for
 * status codes >= 400.
 * @param {Response} response 
 * @returns {Promise}
 */
function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        return response.json()
            .then(function(err) {
                throw new Error(err.errorMessage);
            });
    }
}

let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [-122.3321, 47.6062],
    zoom: 12
});
map.addControl(new mapboxgl.NavigationControl());

navigator.geolocation.getCurrentPosition(onCurrentPos, onErrorCurrentPos, {enableHighAccuracy: true});

function onCurrentPos(position) {
    console.log(position);
    let lnglat = [position.coords.longitude, position.coords.latitude];
    map.flyTo({center: lnglat, zoom: 14});

    let div = document.createElement("div");
    div.className = "current-location-marker";
    let marker = new mapboxgl.Marker(div);
    marker.setLngLat(lnglat).addTo(map);
}

function onErrorCurrentPos(error) {
    console.error(error);
    //choose what to do...
}

function addMarker(record) {
    let elem = document.createElement("div");
    elem.className = "data-marker";
    let marker = new mapboxgl.Marker(elem);
    let lnglat = [record.longitude, record.latitude];
    marker.setLngLat(lnglat);
    marker.addTo(map);

    let popup = new mapboxgl.Popup();
    let eventDate = new Date(record.event_clearance_date);
    let popupText = record.event_clearance_description + " (" + eventDate.toLocaleString() + ")";
    
    popup.setText(popupText);
    marker.setPopup(popup);
}

fetch(dataURL)
    .then(handleResponse)
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            addMarker(data[i]);
        }
    })
    .catch(err => console.error(err));
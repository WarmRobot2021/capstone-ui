//code based on tutorial at leafletjs.com/examples/quick-start/
/*NOTE: Routing done using the leaflet-routing-machine developed by pearliedman on github
source code for it is found in the leaflet-routing-machine-3.2.12 folder. All credit goes to the original author.
This service is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. 
Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/
Routing service uses OSRM*/
const map = L.map("map").setView([35.60095000, -82.55402000], 14);
let markerGroup = L.layerGroup();
let group = L.featureGroup();

/*map layers for terrain and satellite found at http://leaflet-extras.github.io/leaflet-providers/preview/, 
streetview and satellite copied from tutorial at https://www.sitepoint.com/leaflet-create-map-beginner-guide/ */
const basemaps = {
    StreetView: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',   { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    Terrain: L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', { minZoom: 0, maxZoom: 18, attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', ext: 'png'}),
    Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'}),
    Satellite: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {minZoom: 0, maxZoom: 20, attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', ext: 'jpg'})
  };
  
L.control.layers(basemaps).addTo(map);
basemaps.StreetView.addTo(map);

displayMarkers();

async function displayMarkers() {

    const response = await fetch("http://localhost:8080/organizations");
    const orgs = await response.json();

    for (let i = 0; i < orgs.length; i++) {
        
        const marker = L.marker([orgs[i].latitude, orgs[i].longitude]).addTo(map);
        marker.addTo(markerGroup);
        marker.bindTooltip(`<b>${orgs[i].name}</b><br>`);
        marker.addTo(group);
        
    }


}
//code for geolocation found on w3schools, for error checking found on stackoverflow
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPosition, error);
    
}

else {

    alert("Geolocation is not supported by this browser.");

}

function showPosition(position) {

    const circle = L.circle([position.coords.latitude, position.coords.longitude], {

        color: "red",
        fillcolor: "#f03",
        radius: 200
    }).addTo(map);

    circle.bindTooltip("You are here").addTo(map);

    
    //found on stackexchange
    group.on("click", function (ev) {

        const latlng = map.mouseEventToLatLng(ev.originalEvent);
        console.log(latlng.lat + ", " + latlng.lng);

    L.Routing.control({
        waypoints: [
            L.latLng(position.coords.latitude, position.coords.longitude),
            L.latLng(ev.latlng.lat, ev.latlng.lng)
        ]
    }).addTo(map);

    })

    group.addTo(map);






}


function error(error) {

    if (error.code == error.PERMISSION_DENIED) {

        alert("Location data required to display current position on map");

    }
}

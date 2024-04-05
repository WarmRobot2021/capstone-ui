//code based on tutorial at leafletjs.com/examples/quick-start/
const map = L.map("map").setView([35.60095000, -82.55402000], 14);

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
        marker.bindTooltip(`<b>${orgs[i].name}</b><br>`);
    }

}
//code found on w3schools
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPosition);

}

else {

    console.log("Geolocation is not supported by this browser.");

}

function showPosition(position) {

    const circle = L.circle([position.coords.latitude, position.coords.longitude], {

        color: "red",
        fillcolor: "#f03",
        radius: 200
    }).addTo(map);

    circle.bindTooltip("You are here").addTo(map);

}


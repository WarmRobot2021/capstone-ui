
function getDropdown() {

    document.getElementById("myDropdown").classList.toggle("show");

}

window.onclick = function (event) {

    if (!event.target.matches(".dropbtn")) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;

        for (i = 0; i < dropdowns.length; i++) {

            let openDropdown = dropdowns[i];

            if (openDropdown.classList.contains("show")) {

                openDropdown.classList.remove("show");

            }
        }
    }
}

async function getDistance(pos, category) {

    //console.log(category);
    let url;

    if (document.getElementById("openView").checked) {

        url = "http://localhost:8080/services/schedule/?open=true&category=" + category;

    }

    else {

        url = "http://localhost:8080/services/schedule/?open=false&category=" + category;

    }

    const response = await fetch(url);
    const cards = await response.json();

    const container = document.querySelector(".results");

    if (!cards) {

        container.innerHTML = "No services available";
        return;

    }

    //code adapted from https://www.movable-type.co.uk/scripts/latlong.html

    let dictionary = new Object();
    let distanceResults = {};

    const R = 6371e3;

    for (let i = 0; i < cards.length; i++) {

        //console.log(cards[i]);
        const lat1 = pos.coords.latitude;
        const long1 = pos.coords.longitude;
        const lat2 = cards[i].latitude;
        const long2 = cards[i].longitude;

        //console.log(lat1);
        //console.log(lat2);
        //console.log(long1);
        //console.log(long2);

        const latDifference = lat2 - lat1;
        const radLat = latDifference * (Math.PI / 180);

        const longDifference = long2 - long1;
        const radLong = longDifference * (Math.PI / 180);

        const a = Math.sin(radLat/2) * Math.sin(radLat/2) + 
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(radLong/2) * Math.sin(radLong/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const dMiles = +((((R * c) / 1000) * 0.6214).toFixed(2));
        
        //console.log(dMiles);
        distanceResults[i] = dMiles;

    }

    //code adapted from stackoverflow post by user thefourtheye
    const sortedResults = Object.keys(distanceResults).map(function(key) {

        return [key, distanceResults[key]];

    });

    sortedResults.sort(function(first, second) {

        return first[1] - second[1];

    });

    showDistanceResults(sortedResults, cards);

 }

function error() {

    alert("User position required for distance view!");

}


async function fetchOrganization(orgId) {

    try {
        
        const response = await fetch("http://localhost:8080/organizations/" + orgId);
        const org = await response.json();
        return org;
        /*
        let card = document.createElement("div");
        card.classList.add("orgCard");

        let name = document.createElement("h2");
        name.textContent = org.name;

        let description = document.createElement("p");
        body.textContent = org.description;

        let address = document.createElement("p");
        address.textContent = org.address;

        let number = document.createElement("p");
        number.textContent = org.number;

        let email = document.createElement("p");
        email.textContent = org.email;

        let website = document.createElement("button");
        website.textContent = org.website;

        card.appendChild(description);
        card.appendChild(body);
        container.appendChild(card);
        */


    }

   catch(error) {

        console.error("Error fetching data:", error);


   }
}


async function showCards(category) {

    try {

        if (document.getElementById("distanceView").checked) {
            
            const self = this;

            console.log("distance view");
            navigator.geolocation.getCurrentPosition(function(position) {

                getDistance(position, category);

            });

        }
        
        /*if (document.getElementById("openView").checked) {

            let url = "http://localhost:8080/services/schedule/?open=true" + "&category=" + category
            const response = await fetch(url);
            const cards = await response.json();
            
            //console.log(cards[0].id);
            renderCards(cards);


        }*/

       /* else {
            

            let url = "http://localhost:8080/services/schedule/?open=false" + "&category=" + category
            const response = await fetch(url);
            const cards = await response.json(); 
            renderCards(cards);

        }*/

        

      

    }

    catch (error) {

        console.error("Error fetching data:", error);

    }



}

async function renderCards(cards) {

    
    const container = document.querySelector(".results");

    if (!cards) {

        container.innerHTML = "no services available";
        return;
    }

    for (let i = 0; i < cards.length; i++) {
        
        addCardsToScreen(cards[i]);

    }

}

async function addCardsToScreen(cardJson) {

    const container = document.querySelector(".results");
    container.innerHTML= "";
    const org = await fetchOrganization(cardJson.orgId);
    console.log(org.name);
    /*let box = document.createElement("div");
    box.classList.add("card");

    let orgName = document.createElement("h2");
    orgName.textContent = fetchOrganization(cardJson.orgId).name;

    let address = document.createElement("p");
    address.textContent = fetchOrganization(cardJson.orgId).address;

    let serviceName = document.createElement("p");
    serviceName.textContent = cardJson.serviceName;

    box.appendChild(orgName);
    box.appendChild(address);
    box.appendChild(serviceName)
    container.appendChild(card);
       */ 
    
    const htmlSnippet = `<div class="serviceCard">
        <h1>${org.name}</h1>
        <h2>${cardJson.serviceName}</h2>
        <p> ${org.address}</p>
        <!--insert script tag to loop over schedule-->
        <script>
            for (let i = 0; i < cardJson.schedules[1])
        </script>
        <p> ${cardJson.schedules[1]}>/p>
        <button type="button" onclick="window.open('C:\Users\kiwit\capstone-ui\orgs.html', '_blank');">Go To Page</button>
    </div>`;

    container.insertAdjacentHTML("beforeend", htmlSnippet);

}

async function showDistanceResults(result, cardJson) {

   /* for (let i = 0; i < cardJson[result[0][0]].schedules.length; i++) {

        console.log(cardJson[result[0][0]].schedules[i].day);
        console.log(cardJson[result[0][0]].schedules[i].open);
        console.log(cardJson[result[0][0]].schedules[i].close);

    }*/
    const container = document.querySelector(".results");
    container.innerHTML = '';

    for (r in result) {

        const org = await fetchOrganization(cardJson[result[r][0]].orgId);
        const htmlSnippet = `<div class="serviceCard">
       <h1>${org.name}</h1>
       <h2>${cardJson[result[r][0]].serviceName}</h2>
       <p> ${org.address}</p>
       <p>${result[r][1]} miles away</p>
       <button type="button" onclick="window.open('C:\Users\kiwit\capstone-ui\orgs.html', '_blank');">Go To Page</button>
       <style>bord</style>
       </div>`;
       container.insertAdjacentHTML("beforeend", htmlSnippet);

    }
   
}



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

async function getDistance(pos) {

    const position = pos.coords;
    const respones = await fetch("http://localhost:8080/services/schedule/?open=false");
    const cards = await response.json();

    for (let i = 0; i < cards.length; i++) {

        
    }
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

        
        
        if (document.getElementById("openView").checked) {

            let url = "http://localhost:8080/services/schedule/?open=true" + "&category=" + category
            const response = await fetch(url);
            const cards = await response.json();
            
            //console.log(cards[0].id);
            renderCards(cards);


        }

        else {
            

            let url = "http://localhost:8080/services/schedule/?open=false" + "&category=" + category
            const response = await fetch(url);
            const cards = await response.json(); 
            renderCards(cards);

        }

        if (document.getElementById("distanceView").checked) {

            navigator.geolocation.getCurrentPosition((position) => {
                getDistance(position.coords.latitude, position.coords.lngitude);
            })

        }

      

    }

    catch (error) {

        console.error("Error fetching data:", error);

    }



}

async function renderCards(cards) {

    
    const container = document.querySelector("#results");

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
        <script><script>
        <p> ${cardJson.schedules[1]}>/p>
        <button type="button" onclick="window.open('127.0.0.1:5501/orgs.html', '_blank');">Go To Page</button>
    </div>`;

    container.insertAdjacentHTML("beforeend", htmlSnippet);

}



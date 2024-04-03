
async function fetchOrganizations(id) {
    
    try {
        
        const response = await fetch("http://localhost:8080/organizations/" + id);
        const orgs = await response.json();
        
        return orgs;

    }

   catch(error) {

        console.error("Error fetching data:", error);

   }

}

window.onload = function() {

    fetchOrganization(id);

}
function addOrgToScreen(orgJson) {

    const container = document.querySelector(".container");

    const htmlSnippet = `
        <div class="card">
            <h2>${orgJson.name}</h2>
            <br><br>
            <h2>${orgJson.description}</h2>
            <h2>${orgJson.website}</h2>
            <p>${orgJson.address}</p>
            <button onclick="showOrgDetail(${orgJson.id})">Go To Page</button>
        </div>
    `;
    // let card = document.createElement("div");
    // card.classList.add("card");

    // let description = document.createElement("h2");
    // description.textContent = orgJson.description;

    // let body = document.createElement("p");
    // body.textContent = orgJson.title;

    // card.appendChild(description);
    // card.appendChild(body);
    // container.appendChild(card);
    container.insertAdjacentHTML('beforeend', htmlSnippet);

}


async function renderOrganizations() {

    const container = document.querySelector(".container")
    container.innerHTML = ""
    const organizations = await fetchOrganizations();
    console.log("Organizations:", organizations)
    if (!organizations) {

        return;

    }

    organizations.forEach(addOrgToScreen);

}

async function showOrgDetail(orgId) {

    console.log("fetch the organization", orgId);
    const orgJson = await fetchOrganization(orgId);
    console.log(orgJson);

}

async function fetchServices() {
    
    try {
        
        const response = await fetch(`http://localhost:8080/Organizations/${orgId}`);
        const org = await response.json();
        
        const container = document.querySelector(".container");
        container.innerHTML = `
            <button onclick="renderOrganizations()">Back</button>
            <h1> ${org.name}</h1>
            <p> ${org.description} </p>
            <p> ${org.address} </p>
            <a href = "${org.website}">website</a>
            <p> ${org.number} </p>


        `;

        //return data;

    }

   catch(error) {

        console.error("Error fetching data:", error);

   }

}
renderOrganizations();

  


    





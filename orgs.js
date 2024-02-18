//fetch() method: It is defined on the window object, which we can use to perform request.
//This method will return promise
//Promise will either be fulfilled or rejected

async function fetchOrganizations() {
    
    try {
        
        const response = await fetch("http://localhost:8080/Organizations");
        const data = await response.json();
        
        return data;

    }

   catch(error) {

        console.error("Error fetching data:", error);

   }

}

function addOrgToScreen(orgJson) {

    const container = document.querySelector(".container");

    const htmlSnippet = `
        <div class="card">
            <h2>${orgJson.name}</h2>
            <p>${orgJson.address}</p>
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

    
    const organizations = await fetchOrganizations();
    console.log("Organizations:", organizations)
    if (!organizations) {

        return;

    }

    organizations.forEach(addOrgToScreen);

}

renderOrganizations();

    


    





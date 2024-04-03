async function updateOrg(id, name, description, number, website, email, fax, address, longitude, latitude) {

    orgData = document.getElementById(org-insert);
    const response = await fetch("http://localhost:8080/Organizations", {
        method: "POST",
        body: JSON.stringify({

            description: description,
            website: website,
            fax: fax,
            email: email,
            address: address,
            longitude: longitude,
            latitude: latitude,
            name: name,
            id: id,
            number: number

        }),

        headers: {

            "Content-type": "application/json; charset=UTF-8"
        }
        
    })


    
}

async function createOrg(ev) {

    ev.preventDefault();
    const orgName = document.getElementById("orgName");
    const description = document.getElementById("description");
    const phoneNumber = document.getElementById("phoneNumber");
    const website = document.getElementById("website");
    const email = document.getElementById("email");
    const fax = document.getElementById("fax");
    const address = document.getElementById("address");
    const longitude = document.getElementById("longitude");
    const latitude = document.getElementById("latitude");

    const response = await fetch("http://localhost:8080/Organizations", {

        method: "POST",
        headers: {

            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origion": "*"
            
        },
        
        body: JSON.stringify({

            description: description,
            website: website,
            fax: fax,
            email: email,
            address: address,
            longitude: longitude,
            latitude: latitude,
            name: orgName,
            number: phoneNumber

        })


    });

    const data = await response.text();
    console.log(data);
    
}
window.onload() = function() {

    document.getElementById("displayData").checked = false;
    document.getElementById("insertData").checked = false;
    document.getElementById("updateData").checked = false;
    document.getElementById("deleteData").checked = false;
    
}
if (document.getElementById("displayData").checked) {

    const container = document.getElementsByClassName("forms");
    const htmlSnippet = `<h2>Please select which table to display:</h2>
                            <label>
                                <input type=checkbox>SelectData"
                            <label>
                            `
    container.insertAdjacentHTML("beforeend", htmlSnippet);

}

async function updateOrg(ev) {

    ev.preventDefault();
    const name = document.getElementById("orgUpdateName").value;
    const description = document.getElementById("orgUpdateDescription").value;
    const website = document.getElementById("orgUpdateWebsite").value;
    const fax = document.getElementById("orgUpdateFax").value;
    const email = document.getElementById("orgUpdateEmail").value;
    const address = document.getElementById("orgUpdateAddress").value;
    const longitude = document.getElementById("orgUpdateLongitude").value;
    const latitude = document.getElementById("orgUpdateLatitude").value;
    const number = document.getElementById("orgUpdateNumber").value;
    const id = document.getElementById("orgUpdateId").value;

    const response = await fetch("localhost:8080/organizations/" + id, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },

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

    });

}


    


async function createOrg(ev) {

    ev.preventDefault();
    const orgName = document.getElementById("orgName").value;
    const description = document.getElementById("description").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const website = document.getElementById("website").value;
    const email = document.getElementById("email").value;
    const fax = document.getElementById("fax").value;
    const address = document.getElementById("address").value;
    const longitude = document.getElementById("longitude").value;
    const latitude = document.getElementById("latitude").value;

    const response = await fetch("http://localhost:8080/organizations", {

        method: "POST",
        headers: {

            "Content-type": "application/json; charset=UTF-8",
            //"Access-Control-Allow-Origin": "*"

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

async function deleteOrg(ev) {

    
}

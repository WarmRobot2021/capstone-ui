function chooseOption(option) {

    if (option == "display") {

        const container = document.querySelector(".forms");
        container.innerHTML = "";
        console.log("test");
        const htmlSnippet = `<div id="display">
                                <h2>Please Select Which Tables To View Data From:</h2>
                                <label for="organizations">Organizations</label>
                                <input type="checkbox" id="organizations" name="organizations" onclick="displayTable('organizations')">
                                <label for="schedule">Schedule</label>
                                <input type="checkbox" id="schedule" name="schedule" onclick="displayTable('schedule')">
                                <label for="services">Services</label>
                                <input type="checkbox" id="services" name="services" onclick="displayTable('services')">
                            </div>
                            `
        
        
        container.insertAdjacentHTML("beforeend", htmlSnippet);

    }

    else if (option == "insert") {

        const container = document.querySelector(".forms");
        container.innerHTML = "";
    
        const htmlSnippet = ` <div class="forms" id="org-insert">
                                <h2>Create Organization</h2>
                                <form name="Organization Insert" method="post">
                                    <label for="orgName">Organization Name:</label>
                                    <input type="text" id="orgName" name="orgName"><br><br>
                                    <label for="description">Description:</label>
                                    <input type="text" id="description" name="description"><br><br>
                                    <label for="phoneNumber">Phone Number:</label>
                                    <input type="text" id="phoneNumber" name="phoneNumber"><br><br>
                                    <label for="website">Website:</label>
                                    <input type="text" id="website" name="website"><br><br>
                                    <label for="email">Email:</label>
                                    <input type="text" id="email" name="email"><br><br>
                                    <label for="fax">Fax:</label>
                                    <input type="text" id="fax" name="fax"><br><br>
                                    <label for="address">Address:</label>
                                    <input type="text" id="address" name="address"><br><br>
                                    <label for="longitude">Longitude:</label>
                                    <input type="text" id="longitude" name="longitude"><br><br>
                                    <label for="latitude">Latitude:</label>
                                    <input type="text" id="latitude" name="latitude"><br><br>
                                    <input type="submit" value="Submit">
                                    <input type="reset" value="Reset">
                                </form>
                            </div>
                            <div class="forms" id="schedule-insert">
            <h2>Create Schedule</h2>
            <form name="Schedule Insert" onsubmit="createSchedule(event)">
                <label for="schedInsertServiceId">Service ID:</label>
                <input type="text" id="schedInsertServiceId" name="schedInsertServiceId"><br><br>
                <label for="schedInsertDay">Day:</label>
                <input type="text" id="schedInsertDay" name="schedInsertDay"><br><br>
                <label for="schedInsertOpen">Opening time:</label>
                <input type="text" id="schedInsertOpen" name="schedInsertOpen"><br><br>
                <label for="schedInsertClose">Closing time:</label>
                <input type="text" id="schedInsertClose" name="schedInsertClose"><br><br>
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </div>
        <div class="forms" id="service-insert">
        <h2>Create Service</h2>
        <form name="Service Insert" onsubmit="createService(event)">
            <label for="orgId">Organization ID</label>
            <input type="text" id="orgId" name="orgId"><br><br>
            <label for="name">Service name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="category">Service category:</label>
            <input type="text" id="category" name="category"><br><br>
            <label for="serviceLatitude">Latitude:</label>
            <input type="text" id="serviceLatitude" name="serviceLatitude"><br><br>
            <label for="serviceLongitude">Longitude:</label>
            <input type="text" id="serviceLongitude" name="serviceLongitude"><br><br>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
    </div>`

        container.insertAdjacentHTML("beforeend", htmlSnippet);


    /*const htmlSnippet = `<h2>Please select which table to display:</h2>
                            <label>
                                <input type=checkbox>SelectData"
                            <label>
                            `
    container.insertAdjacentHTML("beforeend", htmlSnippet);*/

    }

    else if (option == "update") {

        const container = document.querySelector(".forms");
        container.innerHTML = "";

        const htmlSnippet = `<div class="forms" id="org-update">
        <h2>Update Organization</h2>
        <form name="Organization Update" onsubmit="updateOrg(event)">
            <label for="orgUpdateId">Id of Organization to be updated:</label>
            <input type="text" id="orgUpdateId" name="orgUpdateName"><br><br>
            <label for="orgUpdateName">Organization Name:</label>
            <input type="text" id="orgUpdateName" name="orgUpdateName"><br><br>
            <label for="orgUpdateDescription">Description:</label>
            <input type="text" id="orgUpdateDescription" name="orgUpdateDescription"><br><br>
            <label for="orgUpdateNumber">Phone Number:</label>
            <input type="text" id="orgUpdateNumber" name="orgUpdateNumber"><br><br>
            <label for="orgUpdateWebsite">Website:</label>
            <input type="text" id="orgUpdateWebsite" name="orgUpdateWebsite"><br><br>
            <label for="orgUpdateEmail">Email:</label>
            <input type="text" id="orgUpdateEmail" name="orgUpdateEmail"><br><br>
            <label for="orgUpdateFax">Fax:</label>
            <input type="text" id="orgUpdateFax" name="orgUpdateFax"><br><br>
            <label for="orgUpdateAddress">Address:</label>
            <input type="text" id="orgUpdateAddress" name="orgUpdateAddress"><br><br>
            <label for="orgUpdateLongitude">Longitude:</label>
            <input type="text" id="orgUpdateLongitude" name="orgUpdateLongitude"><br><br>
            <label for="orgUpdateLatitude">Latitude:</label>
            <input type="text" id="orgUpdateLatitude" name="orgUpdateLatitude"><br><br>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
    </div>
    <div class="forms" id="schedule-update">
            <h2>Update Schedule</h2>
            <form name="Schedule Update" onsubmit="updateSchedule(event)">
                <label for="schedUpdateId">Id of Schedule to be changed:</label>
                <input type="text" id="schedUpdateId" name="schedUpdateId"><br><br>
                <label for="schedUpdateServiceId">Service id:</label>
                <input type="text" id="schedUpdateServiceId" name="schedUpdateServiceId"><br><br>
                <label for="day">Day:</label>
                <input type="text" id="day" name="day"><br><br>
                <label for="open">Opening time:</label>
                <input type="txt" id="open" name="open"><br><br>
                <label for="close">Closing time:</label>
                <input type="txt" id="close" name="close"><br><br>
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </div>
        <div class="forms" id="service-update">
            <h2>Update Service</h2>
            <form name="Service Update" onsubmit="updateService(event)">
                <label for="serviceUpdateId">Id of Service to be updated:</label>
                <input type="text" id="serviceUpdateId" name="serviceUpdateId"><br><br>
                <label for="serviceUpdateOrgId">Organization Id</label>
                <input type="text" id="serviceUpdateOrgId" name="serviceUpdateOrgId"><br><br>
                <label for="serviceUpdateName">Service name:</label>
                <input type="text" id="serviceUpdateName" name="serviceUpdateName"><br><br>
                <label for="serviceUpdateCategory">Service category:</label>
                <input type="text" id="serivceUpdateCategory" name="serviceUpdateCategory"><br><br>
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </div>
    `
        container.insertAdjacentHTML("beforeend", htmlSnippet);
    }

    else {

        const container = document.querySelector(".forms");
        container.innerHTML = "";

        const htmlSnippet = `<div class="forms" id="org-delete">
        <h2>Delete Organization</h2>
        <form name="Organization Delete" onsubmit="deleteOrg(event)">
            <label for="orgDeleteId">Organization ID:</label>
            <input type="text" id="orgDeleteId" name="orgDeleteId"><br><br>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
    </div>
    <div class="forms" id="schedule-delete-by-service-id">
            <h2>Delete Schedule For Service</h2>
            <form name="Schedule Delete By Service Id" onsubmit="deleteScheduleByServiceId(event)">
                <label for="scheduleDeleteServiceId">Service ID:</label>
                <input type="text" id="scheduleDeleteServiceId" name="scheduleDeleteServiceId">
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </div>
        <div class="forms" id="schedule-delete-by-schedule-id">
            <h2>Delete Schedule For Day</h2>
            <form name="Schedule Delete By Schedule Id" onsubmit="deleteScheduleByScheduleId(event)">
                <label for="scheduleDeleteScheduleId">Schedule ID:</label>
                <input type="text" id="scheduleDeleteScheduleId" name="scheduleDeleteScheduleId">
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </div>
        <div class="forms" id="service-delete">
            <h2>Delete Service</h2>
            <form name="Service Delete" method="post" action="deleteService.php">
                <label for="serviceDeleteId">Service ID:</label>
                <input type="text" id="serviceDeleteId" name="serviceDeleteId"><br><br>
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </div>`

        container.insertAdjacentHTML("beforeend", htmlSnippet);

    }

}

async function displayTable(tableData) {

    const table = document.querySelector(".tables");
    const response = await fetch("http://localhost:8080/" + tableData);
    const data = response.json();
    console.log(data);
    generateTable(table, data);
    generateTableHead(table, Object.keys(data[0]));

}

//built following a tutorial on valentinog.com
function generateTableHead(table, data) {

    let thead = table.createTHead();
    let row = thead.insertRow();
    
    for (let key of data) {

        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {

    for (let i = 0; i < data.length; i++) {

        let row = table.insertRow();
        
        for (element in data[i]) {

            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

async function getOrg(ev) {}

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


async function deleteOrg(ev) {

    ev.preventDefault();

    const id = document.getElementById("serviceC")
    const response = await fetch("localhost:8080/organizations/" + id,)

    
}

async function getSchedule(ev) {}

async function createSchedule(ev) {

    ev.preventDefault();
    const serviceId = document.getElementById("schedInsertServiceId").value;
    const day = document.getElementById("schedInsertDay").value;
    const openTime = document.getElementById("schedInsertOpen").value;
    const closeTime = document.getElementById("schedInsertClose").value;
    const response = await fetch("http://localhost:8080/schedule", {

    method: "POST",
    headers: {

        "Content-type": "application/json; charset=UTF-8",

    },
    
    body: JSON.stringify({

        serviceId: serviceId,
        day: day,
        open: openTime,
        close: closeTime

    })


});


const data = await response.text();
console.log(data);


}

async function updateSchedule(ev) {}

async function deleteScheduleByScheduleId(ev) {

    ev.preventDefault();
    const id = document.getElementById("scheduleDeleteScheduleId").value;
    
    const response = await fetch("http://localhost:8080/schedule/" + id, {

    method: "delete"

    });

    if (!response.ok) {

        alert("The request failed with HTTP status " + response.status);

    }

}

async function deleteScheduleByServiceId(ev) {

    ev.preventDefault();
    const id = document.getElementById("scheduleDeleteServiceId").value;
    const response = await fetch("http://localhost:8080/schedule/service/" + id, {

        method: "delete"

    });

    if (!response.ok) {

        alert("The request failed with HTTP status " + response.status);

    }


}

async function getService(ev){}

async function createService(ev) {

    ev.preventDefault();
    const id = document.getElementById("orgId").value;
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const latitude = document.getElementById("serviceLatitude").value;
    const longitude = document.getElementById("serviceLongitude").value;

    const response = await fetch("http://localhost:8080/services", {

        method: "post",
        headers:  {
            
            "Content-type": "application/json; charset=UTF-8"

        },

        body: JSON.stringify({

            orgId: id,
            category: category,
            name: name,
            latitude: latitude,
            longitude: longitude

        })
    });

    const data = await response.text();
    console.log(data);
    
}

async function updateService(ev) {}

async function deleteService(ev) {}
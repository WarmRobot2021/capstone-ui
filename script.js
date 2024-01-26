//fetch() method: It is defined on the window object, which we can use to perform request.
//This method will return promise
//Promise will either be fulfilled or rejected

async function fetchData() {
    
    try {
        
        const response = await fetch("http://localhost:8080/Organizations");
        const data = await response.json();
        
        return data;

    }

   catch(error) {

        console.error("Error fetching data:", error);

   }

}


fetch("http://localhost:8080/Services").then(response => {

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();
})
   .then(servData => {
        console.log("Service data:", servData);

   })

   .catch(error => {
        console.error("Error:", error);
   });

fetch("http://localhost:8080/Schedule").then(response => {

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();
})
   .then(schedData => {
        console.log("Schedule Data:", schedData);
        
   })

   .catch(error => {
        console.error("Error:", error);
   });

async function renderData() {

    const container = document.querySelector(".container");
    const data = await fetchData();
        
    if (!data) {

        return;

    }

    data.forEach(item => {

        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("h2");
        title.textContent = item.title;

        let body = document.createElement("p");
        body.textContent = "hello";

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);

    });

}

renderData();

    


    





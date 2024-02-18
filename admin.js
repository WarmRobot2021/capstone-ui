document.getElementById("org-insert-form").addEventListener("submit", function (e) {
    e.preventDefault();

})

let formData = new FormData(form);

for (let pair of formData.entries()) {

    console.log(pair[0] + ": " + pair[1]);
}
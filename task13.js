const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submission started");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    debugger;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(data => {

        console.log("Request Payload:");
        console.log({
            name,
            email
        });

        console.log("Server Response:");
        console.log(data);

    })
    .catch(error => {
        console.error("Fetch Error:", error);
    });

});
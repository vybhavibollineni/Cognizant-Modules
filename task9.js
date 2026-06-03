// Using async/await

async function loadEvents() {
    document.getElementById("loading").innerHTML = "Loading...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        let output = "";

        data.slice(0, 5).forEach(event => {
            output += `<li>${event.name}</li>`;
        });

        document.getElementById("events").innerHTML = output;
        document.getElementById("loading").innerHTML = "";
    }
    catch (error) {
        document.getElementById("loading").innerHTML =
            "Error loading data";
    }
}
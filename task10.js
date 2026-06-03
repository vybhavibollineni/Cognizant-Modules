// const and object
const eventDetails = {
    name: "Music Fest",
    category: "Music",
    location: "Hyderabad"
};

// default parameter
function greetEvent(eventName = "Unknown Event") {
    return `Welcome to ${eventName}`;
}

function showEvent() {

    // destructuring
    const { name, category, location } = eventDetails;

    // spread operator
    const copiedEvent = { ...eventDetails };

    document.getElementById("output").innerHTML =
        greetEvent(name) +
        "<br>Category: " + category +
        "<br>Location: " + location;
}
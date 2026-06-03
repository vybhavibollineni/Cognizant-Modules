let output = "";
function addEvent(name) {
    output += `<p>Event Added: ${name}</p>`;
}
function registerUser(user) {
    output += `<p>User Registered: ${user}</p>`;
}
function filterEventsByCategory(events, callback) {
    return events.filter(callback);
}
function registrationCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const totalRegistrations = registrationCounter();
addEvent("Music Fest");
registerUser("Rahul");

output += `<p>Total Registrations: ${totalRegistrations()}</p>`;
output += `<p>Total Registrations: ${totalRegistrations()}</p>`;
const events = [
    { name: "Music Fest", category: "Music" },
    { name: "Tech Talk", category: "Technology" }
];
const result = filterEventsByCategory(
    events,
    event => event.category === "Music"
);
result.forEach(event => {
    output += `<p>Filtered Event: ${event.name}</p>`;
});

document.getElementById("output").innerHTML = output;
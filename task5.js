let output = "";
class Event {
    constructor(name, seats) {
        this.name = name;
        this.seats = seats;
    }
}
Event.prototype.checkAvailability = function () {
    return this.seats > 0 ? "Seats Available" : "Event Full";
};
const event1 = new Event("Music Fest", 20);

output += `<p>Event: ${event1.name}</p>`;
output += `<p>Status: ${event1.checkAvailability()}</p>`;
Object.entries(event1).forEach(([key, value]) => {
    output += `<p>${key}: ${value}</p>`;
});
document.getElementById("output").innerHTML = output;
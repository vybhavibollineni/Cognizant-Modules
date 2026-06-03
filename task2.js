const eventName = "Community Meetup";
const eventDate = "10-Jun-2026";
let seats = 50;

document.getElementById("info").innerHTML =
`Event: ${eventName}<br>
Date: ${eventDate}<br>
Available Seats: ${seats}`;

seats--;
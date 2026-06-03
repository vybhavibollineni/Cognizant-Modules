let events = [
    { name: "Music Fest", category: "Music" },
    { name: "Tech Talk", category: "Technology" }
];
events.push({ name: "Dance Show", category: "Music" });
let musicEvents = events.filter(event =>
    event.category === "Music"
);
let cards = musicEvents.map(event =>
    `<p>Event: ${event.name}</p>`
);
document.getElementById("output").innerHTML =
cards.join("");
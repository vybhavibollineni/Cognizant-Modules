const events = [
    { name: "Music Fest", seats: 5 },
    { name: "Tech Talk", seats: 3 }
];
const container = document.querySelector("#eventContainer");

events.forEach(event => {
    const card = document.createElement("div");

    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Seats: <span>${event.seats}</span></p>
        <button>Register</button>
    `;

    const button = card.querySelector("button");
    const seatText = card.querySelector("span");

    button.onclick = function () {
        if (event.seats > 0) {
            event.seats--;
            seatText.textContent = event.seats;
        }
    };

    container.appendChild(card);
});
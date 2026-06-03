const events = [
    { name: "Music Fest", seats: 20 },
    { name: "Tech Talk", seats: 0 },
    { name: "Sports Day", seats: 15 }
];
let output = "";
events.forEach(event => {
    if (event.seats > 0) {
        output += `<p>${event.name} - Seats Available: ${event.seats}</p>`;
    } else {
        output += `<p>${event.name} is Full</p>`;
    }
});

try {
    let seats = 5;
    if (seats <= 0) {
        throw "No seats available";
    }
    seats--;
    output += `<p>Registration Successful. Remaining Seats: ${seats}</p>`;
}
catch (error) {
    output += `<p>Error: ${error}</p>`;
}

document.getElementById("events").innerHTML = output;
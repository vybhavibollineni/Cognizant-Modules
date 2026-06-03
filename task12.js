document.getElementById("submitBtn").addEventListener("click", () => {

    document.getElementById("message").textContent =
        "Sending data...";

    const userData = {
        name: "John",
        email: "john@example.com",
        event: "Workshop"
    };

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("message").textContent =
                " Registration Successful";
        })
        .catch(error => {
            console.error(error);

            document.getElementById("message").textContent =
                " Registration Failed";
        });

    }, 2000);

});
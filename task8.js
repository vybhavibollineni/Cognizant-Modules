function registerEvent() {
    document.getElementById("result").innerHTML =
        "Registration Successful!";
}
document.getElementById("category").onchange = function () {
    alert("Selected Category: " + this.value);
};
document.getElementById("search").addEventListener("keydown", function () {
    console.log("Searching: " + this.value);
});
// code.js

// Simulating a delay for backend data retrieval (you can replace this with actual data loading)
// setTimeout(function () {
//     redirectToDayPage();
// }, 3000); // Replace 3000 with the actual delay in milliseconds

function redirectToDayPage() {
    // Redirect to the "day.html" page
    window.location.href = "days.html";
}
// script.js
// code.js
// script.js

// Function to create boxes
function createBoxes() {
    // Get the value of the input field
    const numDays = document.getElementById("numDays").value;

    // Get the box container
    const boxContainer = document.getElementById("boxContainer");

    // Create and append boxes
    for (let i = 1; i <= numDays; i++) {
        const box = document.createElement("div");
        box.className = "box";
        boxContainer.appendChild(box);
    }
}



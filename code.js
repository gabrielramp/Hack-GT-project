function redirectToDayPage() {
    // Redirect to the "day.html" page
    window.location.href = "days.html";
}

// script.js

console.log(numOfDays);

function createBoxes() {
    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";
    console.log(numOfDays);
    for (let i = 1; i <= numOfDays; i++) {
        const box = document.createElement("button"); // Create a button element
        box.className = "box";
        box.textContent = "Day " + i;

        // Add a click event to open the day detail
        box.addEventListener("click", function () {
            // Calculate the width and height for the pop-up window (3/4 of the screen)
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const popupWidth = Math.floor(screenWidth * 0.75);
            const popupHeight = Math.floor(screenHeight * 0.75);

            // Calculate the position for centering the pop-up window
            const leftPosition = (screenWidth - popupWidth) / 2;
            const topPosition = (screenHeight - popupHeight) / 2;

            // Open the pop-up window
            const dayDetailContent = "Details for Day " + i;
            const popupWindow = window.open("", "DayDetails", `width=${popupWidth}, height=${popupHeight}, left=${leftPosition}, top=${topPosition}`);
            
            // Write the content into the pop-up window
            popupWindow.document.write(`<h2>${dayDetailContent}</h2>`);
            popupWindow.document.write('<p>This is your day detail.</p>');
            
            // Add a close button in the pop-up
            popupWindow.document.write('<button onclick="window.close()">Close</button>');
        });

        boxContainer.appendChild(box);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Call createBoxes function with the desired number of days (e.g., 7)
    console.log("HI");
    createBoxes();
});

function generatePage() {
    // Get the skill from the input field
    const skill = document.getElementById("input1").value;
    window.location.href = "loading.html";
    // Redirect to the "progress.html" page with the skill as a query parameter
}


// ...

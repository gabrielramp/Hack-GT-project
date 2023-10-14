function redirectToDayPage() {
    // Redirect to the "day.html" page
    window.location.href = "days.html";
}

// script.js

function generatePage() {
    // Get the values from the input fields and store them in variables
    const skill = document.getElementById("input1").value;
    const hoursPerDay = document.getElementById("input2").value;
    const numOfDays = document.getElementById("input3").value;
    // Redirect to the "loading.html" page
    window.location.href = "loading.html";

    // You can use the 'skill', 'hoursPerDay', and 'numOfDays' variables as needed
    // For example, you can pass them to the 'loading.html' page or perform other operations.
}

// Function to create boxes
// script.js

// code.js

// ...

// Function to create boxes
// code.js

// ...

// Function to create boxes
// code.js

// ...

// Function to create boxes
function createBoxes() {
    const numDays = parseInt(document.getElementById("numDays").value);
    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";

    for (let i = 1; i <= numDays; i++) {
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

// ...

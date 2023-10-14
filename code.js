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
function createBoxes() {
    const numDays = parseInt(document.getElementById("numDays").value);
    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";

    for (let i = 1; i <= numDays; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.textContent = "Day " + i;

        // Add a click event to open the day detail
        box.addEventListener("click", function () {
            const dayDetail = document.getElementById("dayDetail");
            dayDetail.style.display = "block";
            const dayDetailContent = document.getElementById("dayDetailContent");
            dayDetailContent.textContent = "Details for Day " + i;

            const closeBtn = document.getElementById("closeBtn");
            closeBtn.addEventListener("click", function () {
                dayDetail.style.display = "none";
            });
        });

        boxContainer.appendChild(box);
    }
}

// ...

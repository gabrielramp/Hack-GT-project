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
let totalCheck = 0;
let checked = localStorage.getItem("checked") ? parseInt(localStorage.getItem("checked")) : 0;

function updateCheckboxCount() {
    const totalCheckValue = document.getElementById("totalCheckValue");
    const checkedValue = document.getElementById("checkedValue");

    totalCheckValue.textContent = totalCheck;
    checkedValue.textContent = checked;

    localStorage.setItem("checked", checked.toString());
}

// function to create boxes, includes pop-up window code
function createBoxes() {
    const numDays = parseInt(document.getElementById("numDays").value);
    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";

    // Initialize the localStorage object
    if (localStorage.getItem("checkboxStates") === null) {
        const checkboxStates = {};
        localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
    }

    // Function to set checkbox states in localStorage
    function setCheckboxState(day, taskIndex, isChecked) {
        const checkboxStates = JSON.parse(localStorage.getItem("checkboxStates"));
        if (!checkboxStates[day]) {
            checkboxStates[day] = {};
        }
        checkboxStates[day][taskIndex] = isChecked;
        localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
    }

    // Function to retrieve checkbox state from localStorage
    function getCheckboxState(day, taskIndex) {
        const checkboxStates = JSON.parse(localStorage.getItem("checkboxStates"));
        if (checkboxStates[day] && checkboxStates[day][taskIndex]) {
            return checkboxStates[day][taskIndex];
        }
        return false;
    }

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
            //const checkbox = popupWindow.document.getElementById(`day${i}task${taskIndex}`);

            // Write the content into the pop-up window
            popupWindow.document.write('<h2 style="text-align: center;">Topic</h2>');
            popupWindow.document.write('<div style="display: flex;">');
            popupWindow.document.write('<div style="width: 50%; text-align: center;">');
            popupWindow.document.write('<h3>Tasks</h3>');
            
            for (let taskIndex = 1; taskIndex <= 2; taskIndex++) {
                const isChecked = getCheckboxState(i, taskIndex);
                // Add checkboxes for tasks
                popupWindow.document.write(`<label><input type="checkbox" id="day${i}task${taskIndex}" ${isChecked ? "checked" : ""}> do this work!</label><br>`);
                
                // Add an event listener to save checkbox state
                const checkbox = popupWindow.document.getElementById(`day${i}task${taskIndex}`);
                checkbox.addEventListener("change", function() {
                    setCheckboxState(i, taskIndex, checkbox.checked);
                    if (checkbox.checked) {
                        checked++;
                    } else {
                        checked--;
                        Math.max(0, checked-1);
                    }
                    updateCheckboxCount();
                });
            }
            
            popupWindow.document.write('</div>');
            popupWindow.document.write('<div style="width: 50%; text-align: center;">');
            popupWindow.document.write('<h3>Resources</h3>');
            
            for (let taskIndex = 3; taskIndex <= 4; taskIndex++) {
                const isChecked = getCheckboxState(i, taskIndex);
                // Add checkboxes for resources
                popupWindow.document.write(`<label><input type="checkbox" id="day${i}task${taskIndex}" ${isChecked ? "checked" : ""}> do this work!</label><br>`);
                
                // Add an event listener to save checkbox state
                const checkbox = popupWindow.document.getElementById(`day${i}task${taskIndex}`);
                checkbox.addEventListener("change", function() {
                    setCheckboxState(i, taskIndex, checkbox.checked);
                    if (checkbox.checked) {
                        checked++;
                    } else {
                        checked--;
                        Math.max(0, checked-1);
                    }
                    updateCheckboxCount();
                });
            }
            
            popupWindow.document.write('</div>');
            popupWindow.document.write('</div>');

            // Add a close button in the pop-up
            popupWindow.document.write('<button onclick="window.close()">Close</button>');
            // checkbox.addEventListener("change", function() {
            //     setCheckboxState(i, taskIndex, checkbox.checked);
            //     if (checkbox.checked) {
            //         checked++;
            //     } else {
            //         checked--;
            //     }
            // });
            //     updateCheckboxCount();
        });

        boxContainer.appendChild(box);
    }

    totalCheck += numDays * 4; // Assuming 4 checkboxes per day
    updateCheckboxCount();
}



// ...

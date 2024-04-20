const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); 

function addTask() {
    // check if the input field is empty or not
    if (inputBox.value === "") {
        // if the field is empty then send an alert message
        alert("You must write a task!");
    } else {
        // if a task is a added an li element will be created to store the task
        let li = document.createElement("li");
        // to display what task is stored in the li element 
        li.innerHTML = inputBox.value;
        // display the stored task in the created list container
        listContainer.appendChild(li);

        // add the X icon aligned with each task added
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    // to clear the input box after a task has been added
    inputBox.value = "";
    // whenever a task is added it will save the progress
    saveData();
}
// addEventListener listens for a "click" event and executes the provided function
listContainer.addEventListener("click", function(f) {
    // check if the clicked element (f.target) has the tag name "LI"
    if (f.target.tagName === "LI") {
        // toggles/ activate the "checked" class in style.css 
        f.target.classList.toggle("checked");
        // whenever a task is checked it will save the progress
        saveData();

        // If the clicked element is not an "LI" but has the tag name "SPAN" which include the X icon, it 
        // removes the parent element of the clicked span (presumably removing the entire list item)
    } else if(f.target.tagName === "SPAN") {
        alert("Are you sure you want to delete this task?")
        f.target.parentElement.remove();
        // whenever a task is removed it will save the progress
        saveData();
    }
}, false);

// another way to write the function above

// function checkOrRemoveTask(f) {
//     if (f.target.tagName === "LI") {
//         f.target.classList.toggle("checked");
//     } else if (f.target.tagName === "SPAN") {
//          alert("Are you sure you want to delete this task?")
//          f.target.parentElement.remove();
//     }
// }
// listContainer.addEventListener("click", checkOrRemoveTask, false);

// store the entered tasks even if page is refreshed or closed
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    // you can display the data using getItem(data)
}

// display the data whenever you open the browser again
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

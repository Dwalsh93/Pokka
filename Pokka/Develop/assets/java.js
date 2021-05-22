// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner:
// THEN the current day is displayed at the top of the calendar
var currentTime = moment().format('LLLL');
document.getElementById("currentDay").innerHTML = currentTime;
console.log(currentTime);

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// This is in HTML

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event
// input type text is added in html

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// create edit button

// var inputEl = document.querySelector("description");
function captureSaveEvent(event) {
    console.log(event);

    var storeDescription = localStorage.getItem(".description", input);

    //variable "parent div" is equal to event.target.parentdiv save variable of description event.target.parentdiv.description.innertext
    //look for the input type in the console might need to save whole parent div as a variable
    localStorage.setItem(".description", input.val());
    // var element = document.body.querySelector('.element[data-id=123456789]');
    var parentDiv = event.target.dataset.key;
}
var type = document.getElementById("type");
var saveBtn = document.getElementById("nine");
saveBtn.addEventListener("click", function(){
    localStorage.setItem("nine", type.value);
});
//use local storage . get item to continue to display value
// for (var i = 0; i < saveBtn.length; i++) {
//     saveBtn[i].addEventListener("click", captureSaveEvent);
//     console.log(saveBtn[i]);

// }



// var saveButtonEl = document.createElement("button");
// saveButtonEl.textContent = "Save";
// saveButtonEl.className = "btn saveBtn";
// saveButtonEl.setAttribute("save-button", saveBtn);

// actionContainerEl.appendChild(saveButtonEl);

// var input = document.getElementById("save");
// localStorage.setItem("saveBtn", input.val());

// WHEN I refresh the page
// THEN the saved events persist

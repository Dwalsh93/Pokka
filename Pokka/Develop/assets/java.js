// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner:
// THEN the current day is displayed at the top of the calendar
// (done)
var currentTime = moment().format('LLLL');
document.getElementById("currentDay").innerHTML = currentTime;
console.log(currentTime);

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// (done) This is in HTML

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event
// (done) input type text is added in html and edited in css

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// user input is currently saved to local storage but not displaying it yet

$(".keep").on("click", function () {
    var currentTime = $(this).parent().siblings(".colorcode").attr("id")
    var text = $(this).parent().siblings(".description").children().val()
    localStorage.setItem(currentTime, text)

})

$("#nine").val(localStorage.getItem("9"))
$("#ten").val(localStorage.getItem("10"))
$("#eleven").val(localStorage.getItem("11"))
$("#twelve").val(localStorage.getItem("12"))
$("#one").val(localStorage.getItem("1"))
$("#two").val(localStorage.getItem("2"))
$("#three").val(localStorage.getItem("3"))
$("#four").val(localStorage.getItem("4"))
$("#five").val(localStorage.getItem("5"))
// continue to repeat and change ids 
// this keyword selects only "this" function,  id or class

// WHEN I refresh the page
// THEN the saved events persist
// working on using local storage to make this happen 

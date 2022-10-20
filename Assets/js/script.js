//Current Day <p> Tag
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
$("#displayCurrentTime").text(moment().format('LT'));

//Color Blocks for the 9AM - 5PM Time Schedule
//Current time
var currentTime = (moment().format('LT'));
//var currentTime = moment("9:00:00", "HH:mm:ss").format("hh:mm A");

//Start time = 9:00AM
var startTime = moment("9:00:00", "HH:mm:ss").format("hh:mm A");
var _10AMTime = moment("10:00:00", "HH:mm:ss").format("hh:mm A");
var _11AMTime = moment("11:00:00", "HH:mm:ss").format("hh:mm A");
var _12PMTime = moment("12:00:00", "HH:mm:ss").format("hh:mm A");
var _1PMTime = moment("13:00:00", "HH:mm:ss").format("hh:mm A");
var _2PMTime = moment("14:00:00", "HH:mm:ss").format("hh:mm A");
var _3PMTime = moment("15:00:00", "HH:mm:ss").format("hh:mm A");
var _4PMTime = moment("16:00:00", "HH:mm:ss").format("hh:mm A");
//End time = 5:00PM
var endTime = moment("17:00:00", "HH:mm:ss").format("hh:mm A");
console.log(startTime); 
console.log(endTime);


//Get input textarea elements individually
var schedule9AMInput = document.getElementById("9AM");
var schedule10AMInput = document.getElementById("10AM");
var schedule11AMInput = document.getElementById("11AM");
var schedule12PMInput = document.getElementById("12PM");
var schedule1PMInput = document.getElementById("1PM");
var schedule2PMInput = document.getElementById("2PM");
var schedule3PMInput = document.getElementById("3PM");
var schedule4PMInput = document.getElementById("4PM");
var schedule5PMInput = document.getElementById("5PM");
//Get all of the textarea elements
var allTextAreaEl = document.querySelectorAll('.form-control');
console.log(allTextAreaEl);

//Get input values from the textarea elements to store into LocalStorage
schedule9AMInput.value = localStorage.getItem("9AMschedule");
schedule10AMInput.value = localStorage.getItem("10AMschedule");
schedule11AMInput.value = localStorage.getItem("11AMschedule");
schedule12PMInput.value = localStorage.getItem("12PMschedule");
schedule1PMInput.value = localStorage.getItem("1PMschedule");
schedule2PMInput.value = localStorage.getItem("2PMschedule");
schedule3PMInput.value = localStorage.getItem("3PMschedule");
schedule4PMInput.value = localStorage.getItem("4PMschedule");
schedule5PMInput.value = localStorage.getItem("5PMschedule");

$( window ).on("load",function(){
//if the page loads and the time block is on the current time the text area will be red
if(currentTime == startTime){
    schedule9AMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good morning!");
} 
else if(currentTime == _10AMTime){
    schedule10AMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good morning!");
}
else if(currentTime == _11AMTime){
    schedule11AMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good morning!");
}
else if(currentTime == _12PMTime){
    schedule12PMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good afternoon!");
}
else if(currentTime == _1PMTime){
    schedule1PMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good afternoon!");
}
else if(currentTime == _2PMTime){
    schedule1PMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good afternoon!");
}
else if(currentTime == _3PMTime){
    schedule1PMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good afternoon!");
}
else if(currentTime == _4PMTime){
    schedule1PMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good evening!");
}
else if(currentTime == endTime){
    schedule1PMInput.classList.add("present");
//Daily Message
$("#dailyMessage").text("Have a good evening!");
}

//if the page loads and the time block is in the future the text area will be green
if(currentTime > startTime){
    schedule9AMInput.classList.add("future");
    schedule10AMInput.classList.add("future");
    schedule11AMInput.classList.add("future");
    schedule12PMInput.classList.add("future");
    schedule1PMInput.classList.add("future");
    schedule2PMInput.classList.add("future");
    schedule3PMInput.classList.add("future");
    schedule4PMInput.classList.add("future");
    schedule5PMInput.classList.add("future");
}


   
    //This line of code below is a test
    alert("The page has reloaded.");
  })

$(".saveBtn").on("click",function(){
   //Store the input values from the textarea elements into LocalStorage
    localStorage.setItem("9AMschedule", schedule9AMInput.value);
    localStorage.setItem("10AMschedule", schedule10AMInput.value);
    localStorage.setItem("11AMschedule", schedule11AMInput.value);
    localStorage.setItem("12PMschedule", schedule12PMInput.value);
    localStorage.setItem("1PMschedule", schedule1PMInput.value);
    localStorage.setItem("2PMschedule", schedule2PMInput.value);
    localStorage.setItem("3PMschedule", schedule3PMInput.value);
    localStorage.setItem("4PMschedule", schedule4PMInput.value);
    localStorage.setItem("5PMschedule", schedule5PMInput.value);
    console.log($(this));
})






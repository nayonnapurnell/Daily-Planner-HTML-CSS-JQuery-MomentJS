//Current Day <p> Tag
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));

//Color Blocks for the 9AM - 5PM Time Schedule
var currentTime = new Date().getHours();

//Get input textarea elements 
var schedule9AMInput = document.getElementById("9AM");
var schedule10AMInput = document.getElementById("10AM");
var schedule11AMInput = document.getElementById("11AM");
var schedule12PMInput = document.getElementById("12PM");
var schedule1PMInput = document.getElementById("1PM");
var schedule2PMInput = document.getElementById("2PM");
var schedule3PMInput = document.getElementById("3PM");
var schedule4PMInput = document.getElementById("4PM");
var schedule5PMInput = document.getElementById("5PM");

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
    //This line of code below is a test
    alert("The text has been changed.");
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





//If the currentTime is in the Past
if (currentTime < 11) {
    //Daily Message
    $("#dailyMessage").text("Have a good morning!");
    //document.body.classList.add("past");
} //If the currentTime is in the Present
else if (currentTime === 12) {
    //Daily Message
    $("#dailyMessage").text("Have a good day!");
    document.body.style.backgroundColor="orange";
} //If the currentTime is in the Future
else {
    //Daily Message
    $("#dailyMessage").text("Have a good afternoon!");
    document.body.style.backgroundColor="grey";
}

//JQuery OnLoad Function




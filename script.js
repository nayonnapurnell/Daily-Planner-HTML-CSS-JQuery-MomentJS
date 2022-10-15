//Current Day <p> Tag
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));
//$("#dailyMessage").text("Hellow World!");

var el = document.getElementById("input-group mb-3");
$(".saveBtn").on("click",function(){
    console.log($(this));

})

//Color Blocks for the 9AM - 5PM Time Schedule
var currentTime = new Date().getHours();

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



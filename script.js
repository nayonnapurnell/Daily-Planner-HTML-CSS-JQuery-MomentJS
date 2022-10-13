//Current Day <p> Tag
$("#currentDay").text(moment().format('ddd MMM Do, YYYY'));

var currentTime = new Date().getHours();

//If the currentTime is in the Past
if (currentTime <= 11) {
    document.write("Have a good morning!");
    document.body.style.backgroundColor="yellow";
} //If the currentTime is in the Present
else if (currentTime === 12) {
    document.write("Have a good evening!");
    document.body.style.backgroundColor="orange";
} //If the currentTime is in the Future
else {
    document.write("Have a good night!");
    document.body.style.backgroundColor="grey";
}


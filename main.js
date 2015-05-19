var timeNow;
var display = [];
var $timeNow = document.querySelector(".timeNow");

function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    $timeNow.textContent = hours + " : " + minutes + " : " + seconds;
  }
  //call now//
displayCurrentTime();

//repeat every second//
setInterval(displayCurrentTime, 1000);

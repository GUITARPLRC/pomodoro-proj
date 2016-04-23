var start = document.getElementById("start"); // start button
var pause = document.getElementById("pause"); // pause button
var setTime = document.getElementById("setTime"); // setTime button
var timer = document.getElementById("timer"); // html timer display
var minutes = document.getElementById("minutes"); // minutes user input
var progressFill = document.getElementById("inner");
var interval; // interval for timer
var minTime;
var secTime = "00";
var num; // increment progess bar
var total = 0; // total to set progress bar max

start.addEventListener("click", startTimer, false);
pause.addEventListener("click", pauseTimer, false);
setTime.addEventListener("click", setTimeTimer, false);

pause.disabled = true;
minutes.value = 20; // default time set
minTime = Number(minutes.value);  // get user input and set time for timer
timer.textContent = minTime + ":" + secTime; // display time on screen


function startTimer() {
	
	num = (1 / (minTime * 60)) * 100;
	setTime.disabled = true;
	start.disabled = true;
	pause.disabled = false;	
	
	interval = setInterval(function() {
		
		secTime -= 1; // subtract 1 second each interval
		total += num;
		progressFill.style.width = total + "%";
		
		if (minTime === 0 && secTime === 0) {
			// when timer has reached 0
			timer.textContent = "Time's Up";
			clearInterval(interval);
			
		}	else {
			
			if (secTime < 0 && minTime > 0) {
				// subtract 1 minute when seconds reach 0
				minTime -= 1;
				secTime = 59;
				
			}
			
			if (secTime < 10) {
				// add 0 in front of seconds when below 10
				secTime = "0" + secTime;
			}
			
			timer.textContent = minTime + ":" + secTime;
		
		}
		
	}, 1000);
	
}

function pauseTimer() {
	
	setTime.disabled = false;
	start.disabled = false;
	pause.disabled = true;
	
	clearInterval(interval);
	
}

function setTimeTimer() {
	
	if (minutes.value <= 0) {
		alert("please enter a value greater than zero");
		
	} else {
		
		start.disabled = false;
		pause.disabled = true;
		
		minTime = Number(minutes.value);
		secTime = "00";
		
		timer.textContent = minTime + ":" + secTime;
	
		clearInterval(interval);
	}
	
}
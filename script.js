var start = document.getElementById("start"); // start button
var pause = document.getElementById("pause"); // pause button
var setTime = document.getElementById("setTime"); // setTime button
var timer = document.getElementById("timer"); // html timer display
var minutes = document.getElementById("minutes"); // minutes user input
var seconds = document.getElementById("seconds"); // seconds user input
var interval; // interval for timer
var minTime;
var secTime;

pause.disabled = true;
start.addEventListener("click", startTimer, false);
pause.addEventListener("click", pauseTimer, false);
setTime.addEventListener("click", setTimeTimer, false);

minutes.value = 20; // default time set
seconds.value = 0; // default time set
// get user input and set time for timer
minTime = Number(minutes.value);
secTime = Number(seconds.value);

if (secTime < 10) {
	
	// add 0 in front of seconds when below 10
	secTime = "0" + secTime;
	
}

timer.textContent = minTime + " Minutes " + secTime + " Second(s) Left";

function startTimer() {
	
	start.disabled = true;
	pause.disabled = false;
	
	interval = setInterval(function() {
		
		if (minTime <= 0 && secTime <= 0) {
			// when timer has reached 0
			timer.textContent = "Time's Up";
			clearInterval(interval);
			
		}	else {
			
			if (secTime <= 0 && minTime > 0) {
				// subtract 1 minute when seconds reach 0
				minTime -= 1;
				secTime = 59;
				
			}
		
			timer.textContent = minTime + " Minutes " + secTime + " Second(s) Left";
			secTime -= 1; // subtract 1 second each interval
			
			if (secTime < 10) {
				
				// add 0 in front of seconds when below 10
				secTime = "0" + secTime;
				
			}
		
		}
		
	}, 1000);
	
}

function pauseTimer() {
	
	start.disabled = false;
	pause.disabled = true;
	
	clearInterval(interval);
	
}

function setTimeTimer() {
	
	start.disabled = false;
	pause.disabled = true;
	
	minTime = Number(minutes.value);
	secTime = Number(seconds.value);
	
	if (secTime < 10) {
		
		// add 0 in front of seconds when below 10
		secTime = "0" + secTime;
		
	}
	
	timer.textContent = minTime + " Minutes " + secTime + " Second(s) Left";
	
	clearInterval(interval);
	
}
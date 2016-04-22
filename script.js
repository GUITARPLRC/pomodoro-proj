var start = document.getElementById("start"); // start button
var pause = document.getElementById("pause"); // pause button
var setTime = document.getElementById("setTime"); // setTime button
var timer = document.getElementById("timer"); // html timer display
var minutes = document.getElementById("minutes"); // minutes user input
var interval; // interval for timer
var minTime;
var secTime = 0;
var num = 0; // increment progess bar
var total = 0; // total to set progress bar
var progress = $("#progress");

pause.disabled = true;

start.addEventListener("click", startTimer, false);
pause.addEventListener("click", pauseTimer, false);
setTime.addEventListener("click", setTimeTimer, false);

minutes.value = 20; // default time set

// get user input and set time for timer
minTime = Number(minutes.value);

if (secTime < 10) {
	
	// add 0 in front of seconds when below 10
	secTime = "0" + secTime;
	
}

timer.textContent = minTime + " Minute(s) Left";

progress.progressbar({value: 0});


function startTimer() {
	
	setTime.disabled = true;
	start.disabled = true;
	pause.disabled = false;	
	
	interval = setInterval(function() {
		
		timer.textContent = minTime + " Minute(s) " + secTime + " Second(s) Left";
		secTime -= 1; // subtract 1 second each interval
		
		progress.progressbar({value: num + 1});
		
		if (minTime <= 0 && secTime <= 0) {
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
	
	start.disabled = false;
	pause.disabled = true;
	total = 0;
	$("#progress").progressbar({max: total});
	
	minTime = Number(minutes.value);
	secTime = 0;
	
	total = (minTime * 60 * 1000);
	progress.progressbar({max: total});
	
	if (secTime < 10) {
				
		// add 0 in front of seconds when below 10
		secTime = "0" + secTime;
				
	}
	
	timer.textContent = minTime + " Minute(s) " + secTime + " Second(s) Left";
	
	clearInterval(interval);
	
}
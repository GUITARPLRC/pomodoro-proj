var start = document.getElementById("start"); // start button
var pause = document.getElementById("pause"); // pause button
var reset = document.getElementById("reset"); // reset button
var timer = document.getElementById("timer"); // html timer display
var minutes = document.getElementById("minutes"); // minutes user input
var seconds = document.getElementById("seconds"); // seconds user input
var time = 5; // set time for timer
var interval; // interval for timer
var minTime;
var secTime;

pause.disabled = true;
start.addEventListener("click", startTimer, false);
pause.addEventListener("click", pauseTimer, false);
reset.addEventListener("click", resetTimer, false);

minutes.value = 5;
seconds.value = 0;

minTime = Number(minutes.value);
secTime = Number(seconds.value);

timer.textContent = minTime + " Minutes " + secTime + " Second(s) Left";

function startTimer() {
	
	start.disabled = true;
	pause.disabled = false;
	
	minTime = Number(minutes.value);
	secTime = Number(seconds.value);
	
	interval = setInterval(function() {
		
		
		if (minutes <= 0 && seconds <= 0) {
			
			timer.textContent = minTime + " Minutes " + secTime + " Second(s) Left";
			clearInterval(interval);
			
		}	else {
			
			if (secTime < 0 && minTime > 0) {
				
				minTime -= 1;
				secTime = 59;
				
			}
		
			timer.textContent = minTime + " Minutes " + secTime + " Second(s) Left";
			secTime -= 1;
		
		}
		
	}, 1000);
	
}

function pauseTimer() {
	
	start.disabled = false;
	pause.disabled = true;
	
	clearInterval(interval);
	
}

function resetTimer() {
	
	start.disabled = false;
	pause.disabled = true;
	
	minTime = Number(minutes.value);
	secTime = Number(seconds.value);
	
	timer.textContent = minTime + " Minutes " + secTime + " Second(s) Left";
	
	clearInterval(interval);
	
}
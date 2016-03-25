var start = document.getElementById("start"); // start button
var pause = document.getElementById("pause"); // pause button
var timer = document.getElementById("timer"); // html timer display
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var time = 5; // set time for timer
var interval; // interval var for timer

pause.disabled = true;
start.addEventListener("click", startTimer, false);
pause.addEventListener("click", pauseTimer, false);

timer.textContent = time;

function startTimer() {
	
	start.disabled = true;
	pause.disabled = false;
	
	interval = setInterval(function() {
		
		
		if (time <= 0) {
			
			timer.textContent = time;
			clearInterval(interval);
			
		}	else {
		
		timer.textContent = time;
		time -= 1;	
		
		}
		
	}, 1000);
	
}

function pauseTimer() {
	
	start.disabled = false;
	pause.disabled = true;
	
	clearInterval(interval);
	
}
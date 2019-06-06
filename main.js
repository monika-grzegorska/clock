
function loadGlobalIntervals(){
  setInterval(clockService.displayClock, 1000);
  setInterval(clockService.changingClockColorEverySecond, 1000);
}

window.onload = function() {
  workService.chooseLenghtOfOverime();
  timePickerService.registerTimePicker();
  loadGlobalIntervals();
}


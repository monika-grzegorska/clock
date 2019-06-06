
function loadGlobalIntervals(){
  setInterval(clockService.displayClock(), 1000);
  setInterval(clockService.changingClockColorEverySecond, 1000);
}

window.onload = function() {
  timePickerService.registerTimePicker();
  loadGlobalIntervals();
}


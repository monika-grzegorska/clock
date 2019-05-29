function startTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  hours + ":" + minutes + ":" + seconds;
  var t = setTimeout(startTime, 500);
}
//Dodawanie 0 jeśli sekundy są mniejsze od 10
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

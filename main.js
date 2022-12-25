// Set the date we're counting down to
var countDownDate = new Date("Jun 27, 2023 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  // Update the count down every 1 second

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceDays = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // days
  var days = Math.floor(distanceDays / (1000 * 60 * 60 * 24));
  days = days < 10 ? "0" + days : days;
  // hours
  var hours = Math.floor(
    (distanceDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = Math.floor((distanceDays % (1000 * 60 * 60)) / (1000 * 60));
  // minutes
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds
  var seconds = Math.floor((distanceDays % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

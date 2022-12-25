// Set the date we're counting down to
var countDownDate = new Date("Jun 27, 2023 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  // Update the count down every 1 second

  // create Date object for current location
  var date = new Date();

  // convert to milliseconds, add local time zone offset and get UTC time in milliseconds
  var utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  // KSA GMT +3:00
  var timeOffset = 3;
  // create new Date object for a different timezone using supplied its GMT offset.
  var ksaTime = utcTime + 3600000 * timeOffset;

  // Find the distance between now and the count down date
  var distanceDays = countDownDate - ksaTime;

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

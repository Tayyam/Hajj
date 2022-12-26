// Set the date we're counting down to
var countDownDate = new Date("Jun 27, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(
  function () {
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

    // If the count down is finished, write some text
    if (distanceDays < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      document.getElementById("sentence").innerHTML =
        "نتمنى لكم حجاً مبروراً وسعياً مشكوراً. ندعو الله أن يتقبل طاعاتكم.";
    }
    //
    if (hours >= 0 && hours <= 2) {
      document.getElementById("hoursSentence").innerHTML = "ساعة";
    }

    if (hours >= 3 && hours <= 10) {
      document.getElementById("hoursSentence").innerHTML = "ساعات";
    }

    if (hours >= 11 && hours <= 24) {
      document.getElementById("hoursSentence").innerHTML = "ساعة";
    }

    if (minutes >= 0 && minutes <= 2) {
      document.getElementById("minutesSentence").innerHTML = "دقيقة";
    }

    if (minutes >= 3 && minutes <= 10) {
      document.getElementById("minutesSentence").innerHTML = "دقائق";
    }

    if (minutes >= 11 && minutes <= 59) {
      document.getElementById("minutesSentence").innerHTML = "دقيقة";
    }

    if (days >= 3 && days <= 10) {
      document.getElementById("daysSentence").innerHTML = "أيام";
    }
    if (days >= 11 && days <= 99) {
      document.getElementById("daysSentence").innerHTML = "يوما";
    }
    if (days >= 100) {
      document.getElementById("daysSentence").innerHTML = "يوم";
    }
  },

  1000
);

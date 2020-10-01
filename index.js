$(document).ready(function () {
  $("#links").hide();
  $("#menu-btn").click(changeNav);

  function changeNav() {
    $("#links").toggle(2000);
    $("#menu-btn").toggleClass("turn");
  }
});

$(document).ready(function () {
  let number = parseInt($(".pull").text(), 10) || 0;

  let interval = setInterval(function () {
    $(".pull").text(number++);

    if (number > 100000) {
      clearInterval(interval);
    }
  }, 300);
});

$(document).ready(function () {
  let number2 = parseInt($(".comp").text(), 10) || 0;

  let interval2 = setInterval(function () {
    $(".comp").text(number2++);

    if (number2 > 100000) {
      clearInterval(interval2);
    }
  }, 200);
});

// Countdown
$(document).ready(function () {
  $("#countdown").countdown({
    date: "31 october 2020 00:00:00",
    format: "on",
  });
});

(function ($) {
  $.fn.countdown = function (options, callback) {
    //custom 'this' selector
    thisEl = $(this);

    //array of custom settings
    var settings = {
      date: null,
      format: null,
    };

    //append the settings array to options
    if (options) {
      $.extend(settings, options);
    }

    //main countdown function
    function countdown_proc() {
      eventDate = Date.parse(settings["date"]) / 1000;
      currentDate = Math.floor($.now() / 1000);

      if (eventDate <= currentDate) {
        callback.call(this);
        clearInterval(interval);
      }

      seconds = eventDate - currentDate;

      days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
      seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed

      hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed

      minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60; //update the seconds variable with no. of minutes removed

      //conditional Ss
      if (days == 1) {
        thisEl.find(".timeRefDays").text("day");
      } else {
        thisEl.find(".timeRefDays").text("days");
      }
      if (hours == 1) {
        thisEl.find(".timeRefHours").text("hour");
      } else {
        thisEl.find(".timeRefHours").text("hours");
      }
      if (minutes == 1) {
        thisEl.find(".timeRefMinutes").text("minute");
      } else {
        thisEl.find(".timeRefMinutes").text("minutes");
      }
      if (seconds == 1) {
        thisEl.find(".timeRefSeconds").text("second");
      } else {
        thisEl.find(".timeRefSeconds").text("seconds");
      }

      //logic for the two_digits ON setting
      if (settings["format"] == "on") {
        days = String(days).length >= 2 ? days : "0" + days;
        hours = String(hours).length >= 2 ? hours : "0" + hours;
        minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
        seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
      }

      //update the countdown's html values.
      if (!isNaN(eventDate)) {
        thisEl.find(".days").text(days);
        thisEl.find(".hours").text(hours);
        thisEl.find(".minutes").text(minutes);
        thisEl.find(".seconds").text(seconds);
      } else {
        alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
        clearInterval(interval);
      }
    }

    //run the function
    countdown_proc();

    //loop the function
    interval = setInterval(countdown_proc, 1000);
  };
})(jQuery);

//about us page js
var textWrapper = document.querySelector(".about");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='line'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".about .line",
    translateZ: 0,
    scale: [4, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (e1, i) => 70 * i,
  })
  .add({
    targets: ".about",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000,
  });

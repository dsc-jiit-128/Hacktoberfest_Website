  
$(document).ready(function() {
    $("#links").hide();
    $("#menu-btn").click(changeNav);
  
    function changeNav() {
      $("#links").toggle(200);
      $("#menu-btn").toggleClass("turn");
    }
  });


  $(document).ready(function() {
    let number = parseInt($('.pull').text(), 10) || 0; 


    let interval = setInterval(function() {
        $('.pull').text(number++); 

        if (number > 100000) {
            clearInterval(interval); 
        }
    }, 300); 
}); 


$(document).ready(function() {
  let number2 = parseInt($('.comp').text(), 10) || 0; 

  let interval2 = setInterval(function() {
      $('.comp').text(number2++); 

      if (number2 > 100000) {
          clearInterval(interval2); 
      }
  }, 200); 
}); 

//Countdown
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        deadline = "Oct 31, 2020 23:59:59";

  let countDown = new Date(deadline).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let countdown = document.getElementById("countdown"),
              finishmessage = document.getElementById("finishmessage");

          countdown.style.display = "none";
          finishmessage.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


// To make the Statistics section scrollable on Clicking in Navbar
$("a").click(function(){
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
});




//about us page js 
var textWrapper=document.querySelector(".about");
textWrapper.innerHTML=textWrapper.textContent.replace(/\S/g, "<span class='line'>$&</span>")

  anime.timeline({loop:false})
  .add({
    targets:'.about .line',
    translateZ:0,
    scale:[4,1],
    opacity:[0,1],
    easing:"easeOutExpo",
    duration:2000,
    delay:(e1,i)=>70*i
  }).add({
    targets:".about",
    opacity:1,
    duration:1000,
    easing:"easeOutExpo",
    delay:2000,
  })




  

  
$(document).ready(function() {
    $("#links").hide();
    $("#menu-btn").click(changeNav);
  
    function changeNav() {
      $("#links").toggle(2000);
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




  
var answer=document.querySelectorAll(".ans");
var icon=document.querySelectorAll(".fa-plus");

// for (let i = 0; i < answer.length; i++) {
//     const element = answer[i];
//     icon[i].addEventListener("click",function(){
//         if(element.style.display=="none"){
//             element.style.display="block";
//         }else{
//             element.style.display="none";
//         }
//     });   
// }

$('.fa-plus').on("click",function(){
   $(this).parent().next('.ans').slideToggle();
});


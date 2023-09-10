/*
// Hamburdeger click
const hamburger = document.querySelector(".hamburger");
//const hamburger = document.getElementByClassName("hamburger");
const nav = document.querySelector(".sidenav");
//const nav = document.getElementsByClassName("sidenav");

const mobileNavMenu = document.getElementById('mobile-nav-menu');

hamburger.addEventListener('click', el => {

    console.log(el.target);
   if (el.target.classList.contains('is-active')){
        el.target.classList.remove('is-active');
        nav.style.width = "0px";
        mobileNavMenu.innerHTML = "";
   }else{

        const leftMenu = document.getElementById('left-menu');
        const clonedMenu = leftMenu.cloneNode(true);
        mobileNavMenu.innerHTML = "";
        mobileNavMenu.appendChild(clonedMenu);

        el.target.classList.add('is-active');
        nav.style.width = "80%";
   }
});
*/
$(document).on("click", ".hamburger", function() {
     if ($(this).hasClass("is-active")){
          $(this).removeClass("is-active");
          $( ".sidenav" ).css({ "width": "0px" });
          $('#mobile-nav-menu').html("");

     }else{
          $('#mobile-nav-menu').html("");
          $( "#left-menu" ).clone().appendTo( "#mobile-nav-menu" );		  
          $( this ).addClass("is-active");
          setTimeout(function() { $( ".sidenav" ).css({ "width": "80%" }); }, 200); 
         
     }
      
 });
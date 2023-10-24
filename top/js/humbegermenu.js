// JavaScript Document
$(".open_btn").click(function () { 
    $(this).toggleClass('active'); 
    $("#section-header-nav").toggleClass('panelactive'); 
  });
  
  $("#section-header_-nav a").click(function () { 
    $(".open_btn").removeClass('active'); 
    $("#section-header-nav").removeClass('panelactive'); 
  });

  document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("#section-header_-nav a");
    const hamburgerButton = document.getElementById(".open_btn");

    hamburgerButton.addEventListener("click", function() {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});






  
$(document).ready(function () {
  // choses-slider


  
  
  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("top", "-600px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".top-navbar").addClass("fixedTop");
      $(".top-navbar").addClass("fixlogo");
      $("#floating").css("opacity", "1");
    } else {
      $(".top-navbar").removeClass("fixedTop");
      $(".top-navbar").removeClass("fixlogo");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });


  $('.sidenav .links li a').map((index, item)=>{
    $(item).click(function(){
      $("#mySidenav").css("top", "-600px");
      $('.bg-sidenavOpen').css("display", "none");
      document.body.classList.remove("openMenuActive");
    })
  })

  new WOW().init();
  
});

function openNav() {
  document.getElementById("mySidenav").style.top = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.top = "-600px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}


const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});

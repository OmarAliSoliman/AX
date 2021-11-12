$(document).ready(function () {
  // choses-slider



  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("left", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".mynavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "1");
    } else {
      $(".mynavbar").removeClass("fixed-navbar");
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

});

function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.left = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

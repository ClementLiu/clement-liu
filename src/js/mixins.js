$(document).ready(function () {
  // rainbowText
  $(".c-rainbow").hover(
    function () {
      $(this).children().first().css("visibility", "hidden");
      $(this).children().last().show();
    },
    function () {
      $(this).children().first().css("visibility", "visible");
      $(this).children().last().hide();
    }
  );
  // index nav color
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    console.log("at Index");
    $(".nav-container .nav-bar ").css({ "background-color": "#ccc" });
  }
});

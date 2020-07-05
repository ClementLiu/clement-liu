// rainbowText
$(document).ready(function () {
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
});

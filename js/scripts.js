$(function() {
  $(".selector").click(function() {
    // console.log($(this)[0].id);
    var id = $(this)[0].id;
    if (id === "horse-selector") {
      console.log("Showing: Horse Zone.");
      $(".horse-info-panel").slideDown();
      $(".cat-info-panel").slideUp();
      $(".csh-info-panel").slideUp();

    } else if (id === "cat-selector") {
      console.log("Showing: Cat Zone.");
      $(".cat-info-panel").slideDown();
      $(".horse-info-panel").slideUp();
      $(".csh-info-panel").slideUp();

    } else if (id === "csh-selector") {
      console.log("Showing: CSH Zone.");
      $(".csh-info-panel").slideDown();
      $(".horse-info-panel").slideUp();
      $(".cat-info-panel").slideUp();

    } else {
      console.log("Whoops. Something has gone wrong.");
    }
  });
});

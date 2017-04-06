

var photoWidth = 500;
var photoQuantity = 4;
var photoPosition = -1*photoWidth*(photoQuantity-1);

function manageArrows() {
  if (photoPosition > photoWidth*-3) {
    $('.advance-right').show(300);
  }
  if(photoPosition === photoWidth*-3) {
    $('.advance-right').hide(300);
  }
  if(photoPosition < 0) {
    $('.advance-left').show(300);
  }
  if(photoPosition === 0) {
    $('.advance-left').hide(300);
  }
}

$(document).ready( function() {
  $(".advance-left").click(function() {
    if(photoPosition < 0) {
      photoPosition += photoWidth;
      $('.strip').animate({
        left: photoPosition+'px'
      });
    manageArrows();
    };
  });

  $(".advance-right").click(function() {
    if(photoPosition > -photoWidth * (photoQuantity-1)) {
      photoPosition -= photoWidth;
      $('.strip').animate({
        left: photoPosition+'px'
      });
    manageArrows();
    }
  });
});

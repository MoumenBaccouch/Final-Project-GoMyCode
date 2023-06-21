// Get all the star elements
var stars = document.getElementsByClassName('star');

// Add click event listener to each star
for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener('click', onStarClick);
}

// Star click event handler
function onStarClick() {
  // Remove active class from all stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove('active');
  }

  // Add active class to clicked star and preceding stars
  var starIndex = Array.prototype.indexOf.call(stars, this);
  for (var i = 0; i <= starIndex; i++) {
    stars[i].classList.add('active');
  }
}

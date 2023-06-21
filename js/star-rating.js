// Get all star elements
var stars = document.getElementsByClassName('star');

// Add event listener to each star
for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener('click', handleStarClick);
}

// Event handler for star click
function handleStarClick(event) {
  var clickedStar = event.target;
  var starIndex = Array.prototype.indexOf.call(stars, clickedStar);
  
  // Update the UI to reflect the selected rating
  updateStarRating(starIndex + 1);
}

// Function to update the star rating UI
function updateStarRating(rating) {
  // Remove "rated" class from all stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove('rated');
  }

  // Add "rated" class to selected stars
  for (var i = 0; i < rating; i++) {
    stars[i].classList.add('rated');
  }
}

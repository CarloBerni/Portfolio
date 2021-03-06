import Rellax from 'rellax';
import helpers from './sub';

console.log(helpers.double(12));





// Get all horizontal scroll element
var horizontals = document.querySelectorAll('.section--horizontal');

// For each horizontal scroll element, apply the effect
horizontals.forEach(function (horizontal) {

  // Get the inner element
  var inner = horizontal.querySelector('.section__inner');

  // When the user scroll and an animation frame is available
  window.addEventListener('scroll', function () {
    window.requestAnimationFrame(function () {

      // The distance to scroll inside the horizontal element
      // is its height - the window's height
      var toGo = horizontal.offsetHeight - window.innerHeight;

      // The scroll position inside the element
      // is the scroll position - the element's distance from the top
      var position = window.scrollY - horizontal.offsetTop;

      // The progression between 0 & 1 is the scroll position
      // inside the element divided by the distance to scroll
      var progression = (position / toGo);

      // If progression is between 0 & 1 that means we are viewing
      // the section so fix it
      if (progression > 0 && progression < 1) {
        horizontal.classList.add('section--isFixed');
      } else { // Don't fix it
        horizontal.classList.remove('section--isFixed');
      }

      // If the progression is above 1 that means the
      // section has been completly scrolled
      if (progression >= 1) {
        horizontal.classList.add('section--isScrolled');
      } else {
        horizontal.classList.remove('section--isScrolled');
      }

      // Set the translation for the element
      setTranslateX(inner, progression);
    });
  });
});

function setTranslateX(element, progression) {
  // Limit the progression factor between 0 & 1
  if (progression > 1) {
    progression = 1;
  } else if (progression < 0) {
    progression = 0;
  }

  // The size to move is the element width minus the window width
  var toMove = element.offsetWidth - window.innerWidth;

  // The transform factor is the size to move multiplied by the progression
  var transform = (-1 * toMove * progression) + 'px';
  element.style.transform = 'translateX(' + transform + ')';
}




// adding the plug


VANTA.WAVES({
  el: "#vantajs",
  color: 0x0,
  shininess: 150.00,
  waveSpeed: 0.50,
  zoom: 0.81
}) 
 


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}











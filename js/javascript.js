/*----------------main-nav open/close--------------------*/

var navToggle = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav');
var mainNavMenu1 = document.querySelector('.main-nav__list1');
var mainNavMenu2 = document.querySelector('.main-nav__list2');

mainNav.classList.remove("main-nav_nojs");

navToggle.onclick = function(e) {
  if(mainNav.classList.contains("main-nav_closed")) {
    mainNav.className =
      mainNav.className.replace("main-nav_closed", "main-nav_opened");
  } else {
    mainNav.className =
      mainNav.className.replace("main-nav_opened", "main-nav_closed");
  }
}

/*-------------------responses-slider----------------------*/
var responsesSlideIndex = 1;
showResponsesSlide(responsesSlideIndex);

function plusRsponsesSlide(n) {
  showResponsesSlide(responsesSlideIndex += n)
}

function showResponsesSlide(n) {

  var responsesContainer = document.querySelector('.responses__container');

  if(n < 1) {responsesSlideIndex = 3};
  if(n > 3) {responsesSlideIndex = 1};

  if(responsesSlideIndex == 1) {
    responsesContainer.style.transform = "translateX(0)";
  } else
  if (responsesSlideIndex == 2) {
    responsesContainer.style.transform = "translateX(-33.333333%)";
  } else
  if (responsesSlideIndex == 3) {
    responsesContainer.style.transform = "translateX(-66.666666%)";
  }
}

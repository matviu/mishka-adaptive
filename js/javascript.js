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

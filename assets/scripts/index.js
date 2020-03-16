document.body.onscroll = function() {
  scrollEvent();
};
document.body.onresize = function() {
  resizeEvent();
};
var menuCloseBtn = document.getElementById("navbarClose");
var menuBtn = document.getElementById("navbarMobileMenu");
var mainLogo = document.getElementById("mainLogo");
var mainLogoImg1 = document.getElementById("mainLogoImg1");
var mainLogoImg2 = document.getElementById("mainLogoImg2");

var text = document.getElementsByClassName("nav-item");
var menuLink = [
  "#product",
  "#application",
  "#specification",
  "#certification",
  "#about",
  "english"
];

for (var i = 0; i < text.length; i++) {
  text[i].addEventListener("click", function(e) {
    closeMenu();
  });
}

menuCloseBtn.addEventListener("click", function(e) {
  closeMenu();
});

mainLogo.addEventListener("click", function(e) {
  closeMenu();
});

menuBtn.addEventListener("click", function(e) {
  var menu = document.getElementById("navbarSupportedContent");
  menu.classList.add("show");
  menuBtn.style.display = "none";
});

function closeMenu() {
  var menu = document.getElementById("navbarSupportedContent");
  menu.classList.remove("show");
  if (getWindowWidth() < 768) {
    menuBtn.style.display = "block";
  }
}

function scrollEvent() {
  var header = document.getElementById("nav_custom");
  var bodyScrollTop = document.body.scrollTop;
  var elementScrollTop = document.documentElement.scrollTop;
  var viewHeight = document.getElementById("carousel").offsetHeight;

  var applicationOffsetHeight = document.getElementById("application")
    .offsetHeight;
  var applicationTitleMobile = document.getElementById(
    "applicationTitleMobile"
  );

  console.log("bodyScrollTop", bodyScrollTop);
  console.log("elementScrollTop", elementScrollTop);
  console.log("applicationOffsetHeight", viewHeight + applicationOffsetHeight);
  if (getWindowWidth() < 768) {
    //mobile title
    displayMobileTitle();

    if (
      (bodyScrollTop > viewHeight * 2 ||
        elementScrollTop > viewHeight * 2) &&
      ( elementScrollTop < viewHeight + applicationOffsetHeight +220)
    ) {
      applicationTitleMobile.classList.add("show-opacity");
    } else {
      applicationTitleMobile.classList.remove("show-opacity");
    }
  } else {
    if (bodyScrollTop > 300 || elementScrollTop > 300) {
      displayPc2Title();
      header.classList.add("nav-custom-fixed-top");
      mainLogoImg1.classList.add("hidden");
      mainLogoImg2.classList.remove("hidden");
    } else {
      displayPc1Title();
      header.classList.remove("nav-custom-fixed-top");
      mainLogoImg1.classList.remove("hidden");
      mainLogoImg2.classList.add("hidden");
    }
  }
}

function displayMobileTitle() {
  var text = document.getElementsByClassName("nav-item");
  for (var i = 0; i < text.length; i++) {
    text[i].classList.remove("nav-text-pc-1");
    text[i].classList.remove("nav-text-pc-2");
    text[i].classList.add("nav-text-moble");
  }
}

function displayPc1Title() {
  var text = document.getElementsByClassName("nav-item");
  for (var i = 0; i < text.length; i++) {
    text[i].classList.remove("nav-text-moble");
    text[i].classList.remove("nav-text-pc-2");
    text[i].classList.add("nav-text-pc-1");
  }
}

function displayPc2Title() {
  var text = document.getElementsByClassName("nav-item");
  for (var i = 0; i < text.length; i++) {
    text[i].classList.remove("nav-text-moble");
    text[i].classList.remove("nav-text-pc-1");
    text[i].classList.add("nav-text-pc-2");
  }
}

function resizeEvent() {
  if (getWindowWidth() >= 768) {
    menuBtn.style.display = "none";
  } else {
    mainLogoImg1.classList.add("hidden");
    mainLogoImg2.classList.remove("hidden");
    menuBtn.style.display = "block";
    closeMenu();
  }
}

function getWindowHeight() {
  return window.innerHeight;
}

function getWindowWidth() {
  return window.innerWidth;
}

function linkNav(link) {
  location.href = link;
  closeMenu();
}

resizeEvent();
scrollEvent();

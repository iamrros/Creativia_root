
let pluses = document.getElementsByClassName('circle-plus');
let tabs = document.getElementsByClassName('accordion__tab');

// for (let i = 0; i < pluses.length; i++) {
//   pluses[i].addEventListener('click', function () {
//     this.classList.toggle('opened')
//   })
// }

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function () {
    if (i===0) {
      pluses[0].classList.toggle('opened');
      pluses[1].classList.remove('opened');
      pluses[2].classList.remove('opened');
    }
    else if (i===1) {
      pluses[1].classList.toggle('opened');
      pluses[0].classList.remove('opened');
      pluses[2].classList.remove('opened');
    }
    else if (i===2) {
      pluses[2].classList.toggle('opened');
      pluses[0].classList.remove('opened');
      pluses[1].classList.remove('opened');
    }
  });
}




let tabsClass = document.getElementsByClassName('q');
let contents = document.getElementsByClassName("accordion-content");
let tabArray = [];

for (let i = 0; i < tabsClass.length; i++) {
  tabArray.push(tabsClass[i]);

  tabArray[i].addEventListener('click', function (e) {
    e.preventDefault();
    // contents[i].classList.toggle('accordion-content--open');
    tabArray[i].classList.toggle('accordion-content--open');
    console.log(contents[i])
    let closeTabs = tabArray.filter(tab => tab !== tabArray[i]);

    for (let tab of closeTabs){
      tab.classList.remove('accordion-content--open');    }
  })
}
let logos = document.getElementsByClassName("footer__socialLogo");
let logosArray = [];

for (let i = 0; i < logos.length; i++) {
  logosArray.push(logos.item(i));

  logos[i].addEventListener("mouseover", function() {

    let changeLogos = logosArray.filter(logo => logo !== logos[i]);

    for (let logo of changeLogos) {
      logo.classList.add("footer__socialLogo_hover")
    }

  });

  logos[i].addEventListener("mouseout", function() {
    for (let logo of logosArray) {
      logo.classList.remove("footer__socialLogo_hover");
    }
  });
}

let hamburger = document.querySelector('.menu-icon ');
let hamburgerMenu = document.querySelector('.hamburger-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('clicked');
  hamburgerMenu.classList.toggle('close-hamburger');
  hamburgerMenu.classList.toggle('scale-up-ver-center');
});

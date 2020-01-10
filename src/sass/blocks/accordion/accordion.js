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

let tabClass = document.getElementsByClassName('q');
let contents = document.getElementsByClassName("accordion-content");
let tabArray = [];

for (let i = 0; i < tabClass.length; i++) {
  tabArray.push(tabClass[i]);

  tabArray[i].addEventListener('click', function (e) {
    e.preventDefault();
    contents[i].classList.toggle('accordion-content--open');
    console.log(contents[i])
    let closeTabs = tabArray.filter(tab => tab !== tabArray[i]);

    for (let tab of closeTabs){
      tab.classList.remove('accordion-content--open');    }
  })
}
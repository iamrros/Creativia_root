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

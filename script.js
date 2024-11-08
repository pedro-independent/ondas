
let colorWhite = "var(--base-color-neutral--white)";
let colorBlue ="var(--base-color-brand--dark-blue)";
let colorLightBlue ="var(--base-color-brand--main-blue)";
let colorTransparent ="var(--base-color-brand--transparent)";


gsap.registerPlugin(ScrollTrigger);

/* Homepage Video Reveal */

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.section_home-hero',
        start: 'top top',
    end: "bottom top",
    scrub: true,
    pin: true, 
    }
})
.to('.home-hero-vid', {
    width: "100%", duration: 1
});

/* Navbar Color Change */

gsap.set(".navbar", {
    backgroundColor: colorTransparent,
  });


gsap.set([".navbar_link", ".dropdown-chevron", ".navbar-logo", ".navbar-logo-text", ], {
  color: colorWhite,
});

gsap.set(".button.navbar-menu-button", {
  backgroundColor: colorWhite,
  color: colorLightBlue
});


  let tlNav = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home-hero",
      start: "center top",
      end: "80% top",
      scrub: true,
      markers: false,
    },
  })
  .to(".navbar", {
    backgroundColor: colorWhite,
  })
  .to([".navbar_link", ".dropdown-chevron", ".navbar-logo", ".navbar-logo-text"], {
    color: colorBlue, 
  }, '<')
  .to(".button.navbar-menu-button", {
    backgroundColor: colorBlue,
    color: colorWhite
  }, '<');
  
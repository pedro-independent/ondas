
let colorWhite = "var(--base-color-neutral--white)";
let colorBlue ="var(--base-color-brand--dark-blue)";
let colorTransparent ="var(--base-color-brand--transparent)";


gsap.registerPlugin(ScrollTrigger);

/* seu porco */
/* Homepage Video Reveal */

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.section_home-hero',
        start: 'top top',
    end: "bottom top",
    scrub: 1,
    pin: true, 
    }
});

tl.to('.home-hero-vid', {
    width: "100%", duration: 1
});

/* Navbar Color Change */

gsap.set(".navbar", {
    backgroundColor: colorTransparent,
  });

// gsap.set(".navbar_menu", {
//     backgroundColor: colorWhite,
//   });

gsap.set([".navbar_link", ".dropdown-chevron", ".navbar-logo", ".navbar-logo-text"], {
  color: colorWhite,
});


  let tlNav = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home-hero",
      start: "center top",
      end: "80% top",
      scrub: true,
      markers: false,
    },
  });

  tlNav.to(".navbar", {
    backgroundColor: colorWhite,
  });
  
  tlNav.to(".navbar_menu", {
    color: colorBlue,
  });


  tlNav.to([".navbar_link", ".dropdown-chevron", ".navbar-logo", ".navbar-logo-text"], {
    color: colorBlue,
  });
  
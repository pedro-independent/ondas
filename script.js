gsap.registerPlugin(ScrollTrigger);

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
    backgroundColor: "var(--base-color-brand--transparent)",
  });

gsap.set(".navbar_menu", {
    backgroundColor: "var(--base-color-brand--white)",
  });

  let tlNav = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home-hero",
      start: "center top",
      end: "80% top",
      scrub: 1,
      markers: true,
    },
  });

  tlNav.to(".navbar", {
    backgroundColor: "var(--base-color-brand--white)",
  });
  
  tlNav.to(".navbar_menu", {
    color: "var(--base-color-brand--dark-blue)",
  });
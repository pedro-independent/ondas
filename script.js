let colorWhite = "var(--base-color-neutral--white)";
let colorBlue = "var(--base-color-brand--dark-blue)";
let colorLightBlue = "var(--base-color-brand--main-blue)";
let colorTransparent = "var(--base-color-brand--transparent)";

gsap.registerPlugin(ScrollTrigger);

/* Detect Scrolling Direction */
function initDetectScrollingDirection() {
  let lastScrollTop = 0;
  const threshold = 10; // Minimal scroll distance to switch to up/down 
  const thresholdTop = 50; // Minimal scroll distance from top of window to start

  window.addEventListener('scroll', () => {
    const nowScrollTop = window.scrollY;

    if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
      // Update Scroll Direction
      const direction = nowScrollTop > lastScrollTop ? 'down' : 'up';
      document.querySelectorAll('[data-scrolling-direction]').forEach(el => 
        el.setAttribute('data-scrolling-direction', direction)
      );

      // Update Scroll Started
      const started = nowScrollTop > thresholdTop;
      document.querySelectorAll('[data-scrolling-started]').forEach(el => 
        el.setAttribute('data-scrolling-started', started ? 'true' : 'false')
      );

      lastScrollTop = nowScrollTop;
    }
  });
}

// Initialize Detect Scrolling Direction
initDetectScrollingDirection();

/* Buttons */
function initButtonCharacterStagger() {
  const offsetIncrement = 0.01; // Transition offset increment in seconds
  const buttons = document.querySelectorAll('[data-button-animate-chars]');

  buttons.forEach(button => {
    const text = button.textContent; // Get the button's text content
    button.innerHTML = ''; // Clear the original content

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      // Handle spaces explicitly
      if (char === ' ') {
        span.style.whiteSpace = 'pre'; // Preserve space width
      }

      button.appendChild(span);
    });
  });
}

// Initialize Button Character Stagger Animation
  initButtonCharacterStagger();

/* Homepage Video Reveal */
let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_home-hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
  })
  .to(".home-hero-vid", {
    width: "100%",
  });

/* Navbar Color Change */

function initNavbarAnimations() {
  gsap.set(".navbar", {
    backgroundColor: colorTransparent,
  });

  gsap.set(
    [".navbar_link", ".dropdown-chevron", ".navbar-logo", ".navbar-logo-text"],
    {
      color: colorWhite,
    }
  );

  gsap.set(".button.navbar-menu-button", {
    backgroundColor: colorWhite,
    color: colorLightBlue,
  });

  let tlNav = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section_home-hero, .section-servico-hero",
        start: "center top",
        end: "80% top",
        scrub: true,
        markers: false,
      },
    })
    .to(".navbar", {
      backgroundColor: colorWhite,
    })
    .to(
      [
        ".navbar_link",
        ".dropdown-chevron",
        ".navbar-logo",
        ".navbar-logo-text",
      ],
      {
        color: colorBlue,
      },
      "<"
    )
    .to(
      ".button.navbar-menu-button",
      {
        backgroundColor: colorBlue,
        color: colorWhite,
      },
      "<"
    );
}

// Check if viewport is above 767px and run the function if true
if (
  window.innerWidth > 991 &&
  (document.querySelector(".section_home-hero") ||
    document.querySelector(".section-servico-hero"))
) {
  console.log("if passed");
  initNavbarAnimations();
}


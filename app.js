const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLists = document.querySelector(".nav-link");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", () => {
    navLists.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// var typed = new Typed('#hero_title', {
//     strings: ['Wetax Agency.s.'],
//     typeSpeed: 40,
//     loop: false,
//     loopCount: Infinity,
//   });


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container 

ScrollReveal().reveal(".heading-x1", {
...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".heading-2", {
...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".service", {
...scrollRevealOption,
    delay:500,
    interval: 600
});

ScrollReveal().reveal(".project", {
...scrollRevealOption,
    delay:500,
    interval: 600
});

ScrollReveal().reveal(".blog-post", {
...scrollRevealOption,
    delay:500,
    interval: 600
});


gsap.from(".header .navbar ", {
  opacity: 0,
  y: "-30px",
  duration: 2,
});

var tl = gsap.timeline();
gsap.from(".header .logo ", {
  opacity: 0,
  x: "-30px",
  duration: 2.3,
});
tl.from(".home-content", {
  opacity: 0,
  y: "-90px",
  duration: 2.5,
});
gsap.from(".togglelabelDiv", {
  opacity: 0,
  x: "-30px",
  duration: 2,
});
gsap.from(".home-img", {
  opacity: 0,
  z: "-3000px",
  duration: 7,
});
gsap.from(".social ", {
  x: "-300px",
  duration: 3,
});
gsap.from(".about ", {
  x: "600px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
  },
});
gsap.from(".myskills .skill-text ", {
  x: "600px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".myskills .skill-text h1",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    markers: true,
  },
});
gsap.from(".myskills .skill-text ", {
  x: "600px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".myskills .skill-text h1",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    markers: true,
  },
});

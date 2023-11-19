const init = () => {
  //
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".square",
      start: "top 70%",
      end: "bottom 20%",
      toggleClass: "white",
      markers: { fontSize: "25px", fontWeight: "bold" },
      scrub: 2, //true
    },
  });
};
init();

const init = () => {
  gsap.set("svg", {
    visibility: "visible",
  });

  // const tl = gsap.timeline({ repeat: -1 });
  // tl.from("circle", {
  //   x: 500,
  //   y: 300,
  //   duration: 1,
  //   scale: 0,
  //   stagger: {
  //     from: "random",
  //     ease: "power3.out",
  //     amount: 1.5,
  //   },
  // });

  //*Optimised version

  gsap.from("circle", {
    duration: 1,
    x: 700,
    y: -700,
    transformOrigin: "center",
    repeat: -1,
    stagger: 0.001,
    // yoyo: true,
    ease: "power3.out",
  });
};
init();

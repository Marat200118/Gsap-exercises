const init = () => {
  const tl = gsap.timeline({ repeat: -1 });

  // tl.to(".ball1", {
  //   duration: 1,
  //   rotation: 180,
  //   transformOrigin: "center right",
  // });

  // tl.to(".ball2", {
  //   duration: 1,
  //   rotation: 180,
  //   transformOrigin: "center right",
  // });

  // tl.to(".ball3", {
  //   duration: 1,
  //   rotation: 180,
  //   transformOrigin: "center right",
  // });

  tl.to(".ball", {
    duration: 1,
    rotation: 180,
    transformOrigin: "center right",
    stagger: 0.5,
  });

  tl.to(".ball", {
    duration: 1,
    x: -50,
  });
};

init();

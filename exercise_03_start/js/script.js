let count = 0;
const maxPlays = 3;
let tl;

const init = () => {
  console.log(gsap.version);
  gsap.set(".banner", { autoAlpha: 1 });
  tl = gsap.timeline({ repeat: maxPlays, onComplete: onTimeLineComplete });

  tl.from("h1", {
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.001,
    ease: "power3.out",
  });

  tl.from(".item", {
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  tl.from(".footer", {
    duration: 1,
    opacity: 0,
    width: 0,
    ease: "power3.out",
    stagger: 0.2,
  });

  const onTimeLineComplete = () => {
    console.log("timeline complete");
    gsap.to(".banner, .footer", {
      backgroundColor: "green",
      repeat: 1,
      yoyo: true,
    });
  };
};

init();

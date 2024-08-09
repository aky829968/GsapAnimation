var tl = gsap.timeline();

function first() {
  tl.from("nav h1,nav h3,nav button", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15,
  });
  tl.from(".part1 h1, .part1 p", {
    x: -200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
  });
  tl.from(".part1 button", {
    opacity: 0,
    duration: 0.3,
  });
  tl.from(
    ".part2 img",
    {
      opacity: 0,
      duration: 0.4,
      x: 100,
    },
    "-=1"
  );
  tl.from(".logos img", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
  });
}
first();
tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});
tl2.from(
  ".elem.line1.left",
  {
    x: -200,
    opacity: 0,
    duration: 1,
  },
  "line1"
);
tl2.from(
  ".elem.line1.right",
  {
    x: 200,
    opacity: 0,
    duration: 1,
  },
  "line1"
);
tl2.from(
  ".elem.line2.left",
  {
    x: -200,
    opacity: 0,
    duration: 1,
  },
  "line2"
);
tl2.from(
  ".elem.line2.right",
  {
    x: 200,
    opacity: 0,
    duration: 1,
  },
  "line2"
);

tl2.from(
  ".elem.line3.left",
  {
    x: -200,
    opacity: 0,
    duration: 1,
  },
  "line3"
);
tl2.from(
  ".elem.line3.right",
  {
    x: 200,
    opacity: 0,
    duration: 1,
  },
  "line3"
);

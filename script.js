let anim1 = () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      // markers: true,
    },
  });

  tl.to(
    "#fanta",
    {
      y: "164%",
      x: "-45%",
    },
    "orange"
  )

    .to(
      "#orange2",
      {
        top: "164%",
      },
      "orange"
    )

    .to(
      "#orange",
      {
        top: "165%",
        width: "15%",
        right: "14%",
      },
      "orange"
    )

    .to(
      "#leaf",
      {
        top: "110%",
        left: "80%",
      },
      "orange"
    )

    .to(
      "#leaf2",
      {
        top: "170%",
        left: "-6%",
        width: "16%",
        rotate: "15deg",
      },
      "orange"
    )

    .to(
      "#leaf3",
      {
        top: "128%",
        left: "10%",
        width: "16%",
      },
      "orange"
    );
};
anim1();

let anim2 = () => {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 95%",
      end: "40% 50%",
      scrub: true,
    },
    delay:0.8,
  });

  tl2.from(
    ".lemon1",
    {
      rotate: "-90deg",
      left: "-80%",
      top: "125%",
    },
    "co"
  );

  tl2.from(
    "#pepsi",
    {
      rotate: "-90deg",
      left: "-80%",
      top: "150%",
      delay: 0.05,
    },
    "co"
  );

  tl2.to(
    "#orange2",
    {
      rotate: "90deg",
      left: "47%",
      width:"18%",
      top: "200%",
    },
    "co"
  );

  tl2.to(
    "#fanta",
    {
      y: "300%",
      x:"0%",
    },
    "co"
  );

  tl2.from(
    ".lemon2",
    {
      rotate: "90deg",
      left: "80%",
      top: "125%",
    },
    "co"
  );

  tl2.from(
    "#cocacola",
    {
      rotate: "90deg",
      left: "80%",
      top: "160%",
      delay: 0.05,
    },
    "co"
  );
};
anim2();

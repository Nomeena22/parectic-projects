
gsap.from(".nlink", {
  stagger : .2,
  y : 10,
  opacity : 0,
  duration : 2, 
  ease: Power2,
})
Shery.textAnimate(".heading h1", {
      //Parameters are optional.
      style: 2,
      y: 10,
      delay: 0.3,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });
    gsap.from(".anim2" ,{
      y:  40,
      stagger: .3,
      delay : 0.1,
      opacity: 0,
      duraion : 1,
      ease: Expo,
    })
Shery.imageEffect(".imgtext img" ,{
    style : 4,
    delay  : 1

  })
  Shery.imageEffect(".susimg img" ,{
    style : 2,
    delay : 2,

  })
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-section',
        pin: true,
        start: '50% 50%',
        end: '300% 50%',
        scrub: true,
        markers: true,
    }
});

tl.to("#animation", {
    opacity: 1,
    filter: "blur(0px)"
})
    .to("#uiux", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#reactjs", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#nodejs", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#adobe", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#GitHub", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#html", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#webdesign", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#webflow", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#figma", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#javascript", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#wordpress", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
    .to("#css", {
        opacity: 1,
        filter: "blur(0px)",
        delay: -0.3
    })
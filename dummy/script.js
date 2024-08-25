document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".photo-container", {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        stagger: {
            amount: 0.5,
            from: "center"
        },
        ease: "power2.out",
    });

    const photos = document.querySelectorAll(".photo-container");

    photos.forEach((photo, index) => {
        photo.addEventListener("mouseover", () => {
            gsap.to(photo, {
                duration: 0.5,
                scale: 1.1,
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
                ease: "power4.out",
            });
        });

        photo.addEventListener("mouseout", () => {
            gsap.to(photo, {
                duration: 0.5,
                scale: 1,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                ease: "power3.out",
            });
        });
    });
});

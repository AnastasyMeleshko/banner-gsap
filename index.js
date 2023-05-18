// Preloader
gsap.from('#my-text', {
   duration: 2,
   x: 0,
   y: 500
})

gsap.to('#my-text', {
    duration: 2,
    x: 0,
    y: 100
})

gsap.from('#photo',{
    delay: 2,
    x:-100,
    y:-200
})

gsap.to('#photo',{
    delay: 2,
    x: 100,
    y: 200,
    rotation: 360,
    duration: 1.5,
})

gsap.to('#loader',{
    delay: 4,
    opacity: 0,
    duration: 1,
    display: 'none',
})

// backgroud-image animation

gsap.to(".piece", 2, {
    scale: 0,
    y: 60,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    delay: 0.5,
    stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center"
    }
});

gsap.to("#image", {
    delay: 8,
    backgroundImage:  'url("./img.jpg")',
});


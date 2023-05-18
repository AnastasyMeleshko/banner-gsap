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

// Backgroud-image animation

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

// Logo animation

gsap.to('#logo', {
    delay: 8.5,
    duration: 1,
    opacity: 1,
})

// Button animation

gsap.from('#cta',{
    delay: 9,
    x: 0,
    y:-200
})

gsap.to('#cta', {
    delay: 9,
    duration: 1,
    opacity: 1,
    y: 0,
    x: 0,
})

// Text animation

gsap.from('#textWrap', {
    delay: 10,
    y: -300,
    x: -300,
})

gsap.to('#textWrap', {
    delay: 10,
    opacity: 1,
    duration: 0.1,
    y: 0,
    x: 0,
})

const numberOfWordsInFrameOne = 16;

function showText1() {
    let delayInterval = 0.2;
    let startDelay = 10;
    for (let i=1; i<numberOfWordsInFrameOne; i++) {
        gsap.to(`#word${i}`, {
            delay: startDelay + delayInterval*i,
            opacity: 1,
            duration: 1,
            y: 0,
            x: 0,
        })
    }
}

showText1();

gsap.to('#textWrap', {
    delay: 15,
    opacity: 1,
    duration: 1,
    y: -250,
    x: 400,
})

function hideText1() {
    let startDelay = 15;
    for (let i=1; i<numberOfWordsInFrameOne; i++) {
        gsap.to(`#word${i}`, {
            delay: startDelay,
            opacity: 0,
            duration: 0.1,
            y: 0,
            x: 0,
        })
    }
}

hideText1();

gsap.from('#textWrap', {
    delay: 16,
    y: -300,
    x: -300,
})

gsap.to('#textWrap', {
    delay: 16,
    opacity: 1,
    duration: 0.5,
    y: 0,
    x: 0,
})


gsap.to('#frame2', {
    delay: 16,
    opacity: 1,
    duration: 1,
    y: 0,
    x: 0,
})


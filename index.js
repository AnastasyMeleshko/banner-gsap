//Redirect to Google:

const wrapper = document.getElementById('wrapper');

wrapper.onclick = () => {
    document.location.assign('https://google.com');
}

// Preloader

function intro() {
    const tl = gsap.timeline().from("#wrapper", {opacity: 0})
        .fromTo('#my-text',
            { duration: 2, x: 0, y: 500 },
            { duration: 2, x: 0, y: 100 })
        .fromTo('#photo',
            { delay: 1, x: -100, y: -200 },
            { delay: 1, x: 100, y: 200, rotation: 360, duration: 1.5 });
    return tl;
}

// Making master timeline

const master = gsap.timeline({repeat: -1});
master.add(intro())

    // Backgroud-image animation

      .add(
        gsap.to('#loader',{
        delay: 1,
        opacity: 0,
        duration: 1,
        display: 'none'})
      )
      .add(
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
    }}))
       .add(
        gsap.to("#image",{
            backgroundImage: 'url("./img.jpg")'
        }))

    // Logo animation

    .add(
        gsap.to('#logo', {
        duration: 1,
        opacity: 1,
        })
      )

// Button animation

    .add(
        gsap.fromTo('#cta',
        { x: 0, y: -200 },
        { duration: 1, opacity: 1, y: 0, x: 0})
    )

// Text animation

    .add(
        gsap.fromTo('#textWrap',
            { y: -200, x: 0},
            { opacity: 1, duration: 0.5, y: 0, x: 0})
    )

// To do - Animation for text from frame 1
    .add(
        gsap.to(`#frame1`, {
            opacity: 1,
            duration: 2.5,
            y: 0,
            x: 0,
        }))

//  Hide text from frame 1

    .add(gsap.to('#textWrap', {
        opacity: 0,
        scale: 0,
        duration: 1,
    }))
    .add(
        gsap.to(`#frame1`, {
        opacity: 0,
        duration: 1,
        scale: 0,
        y: 0,
        x: 0,
        }))

// Show text from frame 2

    .add(
        gsap.to('#textWrap', {
        opacity: 1,
        scale: 1,
        duration: 1,
        y: 0,
        x: 0,
}))
    .add(
        gsap.to('#frame2', {
            opacity: 1,
            duration: 1,
            y: 0,
            x: 0,
        }))

// To do animation for text from frame 2

    .add(
        gsap.to('#frame2', {
            color: "#fac847",
            duration: 2,
            repeat: 2,
            yoyo: true,
        }))



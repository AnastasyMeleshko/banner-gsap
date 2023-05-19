// Preloader
function intro() {
    const tl = gsap.timeline().from("#wrapper", {opacity: 0})
        .fromTo('#my-text',
            {duration: 1.5, x: 0, y: 500},
            {duration: 1.5, x: 0, y: 100})
        .fromTo('#photo',
            {x: -100, y: -200},
            {x: 100, y: 200, rotation: 360, duration: 1});
    return tl;
}

// Making master timeline
const master = gsap.timeline({repeat: -1});
master.add(intro())
    // Backgroud-image animation
    .add(
        gsap.to('#loader', {
            delay: 0.2,
            opacity: 0,
            duration: 1,
            display: 'none'
        })
    )
    .add(
        gsap.from(".piece", {
            scale: 0,
            opacity: 0,
            y: 60,
            duration: 1.5,
            stagger: {
                amount: 1,
                grid: "auto",
                from: "center"
            }
        })
    )
    .add(
        gsap.to("#image", {
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
            {x: 0, y: -200},
            {duration: 0.7, opacity: 1, y: 0, x: 0}))
    // Text animation
    .add(
        gsap.set('#textWrap', {opacity: 1}))
    // Animation for text from frame 1
    .add(
        gsap.set("#word1, #word2, #word3, #word4, #word5, #word6, #word7, #word8, #word9, #word10, #word11, #word12, #word13, #word14, #word15, #word16, #word17, #word18", {opacity: 0}))
    .add(
        gsap.fromTo("#word1, #word2, #word3, #word4, #word5, #word6, #word7, #word8, #word9, #word10, #word11, #word12, #word13, #word14, #word15, #word16, #word17, #word18",
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: 2.5, stagger: 0.2}
        ))
    //  Hide text from frame 1
    .add(gsap.to('#textWrap', {
        opacity: 1,
        scale: 0,
        duration: 0.7,
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
        gsap.set("#textWrap", {scale: 1, x: 0, y: 0, duration: 0.01})
    )
    .add(
        gsap.set("#word-1, #word-2, #word-3, #word-4, #word-5, #word-6, #word-7, #word-8, #word-9, #word-10, #word-11, #word-12", {opacity: 0}))
    .add(
        gsap.set('#frame2', {opacity: 1}))
    .add(
        gsap.fromTo("#word-1, #word-2, #word-3, #word-4, #word-5, #word-6, #word-7, #word-8, #word-9, #word-10, #word-11, #word-12",
            {opacity: 0, y: 50},
            {opacity: 1, y: 0, duration: 2, stagger: 0.2}
        ))
    // Animation for text from frame 2
    .add(
        gsap.to('#frame2', {
            color: "#fac847",
            duration: 2,
            repeat: 1,
            yoyo: true,
        }))
    .add(
        gsap.fromTo("#cta",
            {scale: 1, x: 0, y: 0},
            {scale: 1.1, x: 3, y: -3, duration: 0.5, yoyo: true, repeat: 5, ease: "power1.inOut"}
        ))



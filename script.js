gsap.registerPlugin(ScrollTrigger)


// HEADLINE ANIMATION
gsap.to(".headline span",{
opacity:1,
y:0,
stagger:0.05,
duration:0.6,
ease:"power3.out"
})


// STATS ANIMATION
gsap.to(".stat",{
opacity:1,
y:0,
delay:0.8,
stagger:0.3,
duration:0.8,
ease:"power2.out"
})


// CAR SCROLL ANIMATION
gsap.to(".car",{

x: window.innerWidth + 600,

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"+=1000",
scrub:1.5
}

})


// PARALLAX TEXT
gsap.to(".hero-content",{

y:-120,

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"+=1000",
scrub:1
}

})
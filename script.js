let tl = gsap.timeline()

tl.from('.LogoDiv',{
    x: "-250px",
    duration: 0.5,
    delay:0.1
})
tl.from('nav a', {
    y: "-30px",
    opacity:0,
    color: "#bcd85f",
    duration: 1,
    stagger: 0.2    
})
tl.from('nav button', {
    x: "100px",
    opacity:0,
    duration: 0.5
})
tl.from('.First-Section .content .first h4',{
    x: "-250px",
    opacity: 0,
    duration: 0.7
})
tl.from('.First-Section .content .first p',{
    y:"20px",
    opacity:0,
    duration:0.7
})
tl.from('.First-Section .content .first button',{
    y: "20px",
    duration:0.7,
    opacity:0
})
tl.from('.First-Section .content .second img',{
    x: "200px",
    duration: 0.7,
    opacity:0
})

gsap.from('.companySlider img',{
    y: "50px",
    duration: 1,
    stagger: 0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: "companySlider img",
        scroller: "body",
    }
})
gsap.from('.Services-Section .Heading h4',{
    x: "-50px",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".Services-Section",
        scroller: "body",
        start: "top 95%",
        end: "top 80%",
        scrub:2,
    }
})
gsap.from('.Services-Section .Heading p',{
    x: "50px",
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".Services-Section",
        scroller: "body",
        start: "top 95%",
        end: "top 80%",
        scrub:2,
    }
})

gsap.from('.Services-Section .Cards-Container #First-Card',{
    x: "-300px",
    opacity:0.5,
    scrollTrigger:{
        trigger: ".Cards-Container",
        scroller: "body",
        scrub:2,
        start: "top 95%",
        end: "top 20%",
    }
})
gsap.from('.Services-Section .Cards-Container #Second-Card',{
    x: "300px",
    opacity:0.5,
    scrollTrigger:{
        trigger: ".Cards-Container",
        scroller: "body",
        scrub:2,
        start: "top 95%",
        end: "top 20%",
    }
})
gsap.from('.Services-Section .Cards-Container #Third-Card',{
    x: "-200px",
    opacity:0.5,
    scrollTrigger:{
        trigger: ".Cards-Container",
        scroller: "body",
        scrub:2,
        start: "top 50%",
        end: "top 0%",
    }
})
gsap.from('.Services-Section .Cards-Container #Forth-Card',{
    x: "200px",
    opacity:0.5,
    scrollTrigger:{
        trigger: ".Cards-Container",
        scroller: "body",
        scrub:2,
        start: "top 50%",
        end: "top 0%",
    }
})
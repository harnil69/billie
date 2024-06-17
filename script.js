function page1animation() {
    var tl = gsap.timeline()

tl.from(".left-nav",{
    y:-50,
    duration:0.5,
    opacity:0,
    ease: "power1.inOut",
})
tl.from(".right-nav a,.right-nav button",{
    duration:0.8,
    delay:0.2,
    opacity:0,
    stagger:0.2,
    ease: "power1.inOut",
},"a")
tl.from(".bg-photo",{
    y:120,
    duration:1,
    opacity:-1,
    ease: "power1.inOut",
},"a")
tl.from(".h1-1",{
    x:-300,
    duration:0.5,
    opacity:0,
    ease: "power1.inOut",
})
tl.from(".h1-2",{
    y:-50,
    duration:0.5,
    opacity:0,
    ease: "power1.inOut",
})
tl.from(".h1-4",{
    x:300,
    duration:0.5,
    opacity:0,
    ease: "power1.inOut",
})
    
}
page1animation()
function page2animation() {
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page-2",
            scroller:"body",
            start:"top 60%",
            end:"top 0",
            scrub:2,
        }
    })
    
    tl2.from(".left-p2-video",{
        x:-40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"hello")
    tl2.from(".left-p2",{
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"hello")
    tl2.from(".billie-photo",{
        x:40,
        opacity:0,
        delay:3,
        duration:1,
        ease: "power1.inOut",
    })
    tl2.from(".upper-right-p2 h3",{
        y:-30,
        opacity:0,
        duration:1,
        delay:1,
        ease: "power1.inOut",
    })
    tl2.from(".try-h1",{
        y:-40,
        opacity:0,
        duration:1,
        delay:0.5,
        ease: "power1.inOut",
    })
    tl2.from(".try-h2",{
        y:-40,
        opacity:0,
        duration:1,
        delay:0.5,
        ease: "power1.inOut",
    })
    tl2.from(".page-2-btn",{
        y:-40,
        opacity:0,
        duration:1,
        delay:0.5,
        ease: "power1.inOut",
    },"anim5")
    tl2.from(".page-2-h4",{
        y:-40,
        opacity:0,
        duration:1,
        delay:0.5,
        ease: "power1.inOut",
    },"anim5")
    
}
page2animation()
function page3animation() {
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page-3",
            scroller:"body",
            start:"top 60%",
            end:"top 0",
            scrub:2,
        }
    })
    tl3.from(".left-p3 h2",{
        x:-60,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim7")
    tl3.from(".anim7",{
        x:-40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim7")
    tl3.from(".anim8",{
        x:40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim7")
    tl3.from(".right-p3",{
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim7")
    tl3.from(".left-p3 p",{
        x:-40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim8")
    tl3.from(".anim9",{
        x:-40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim8")
    tl3.from(".anim10",{
        x:40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim8")
    tl3.from(".left-p3 button",{
        x:-20,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim9")
    tl3.from(".anim11",{
        x:-40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim9")
    tl3.from(".anim12",{
        x:40,
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    },"anim9")
    
}
page3animation()
function page4animation() {
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".page-4",
            scroller:"body",
            start:"top 60%",
            end:"top 10%",
            scrub:2,
        }
    })

    tl4.from(".b-photo-2",{
        opacity:0,
        duration:1,
        y:-50,
        ease: "power1.inOut",
    })
    tl4.from(".b-photo-3",{
        opacity:0,
        duration:1,
        y:-50,
        ease: "power1.inOut",
    })
    tl4.from(".b-photo-1",{
        opacity:0,
        duration:1,
        y:-50,
        ease: "power1.inOut",
    })
    tl4.from(".para",{
        opacity:0,
        duration:1,
        y:-50,
        ease: "power1.inOut",
    })
}
page4animation()

function page5animation() {
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:".page-5",
            scroller:"body",
            start:"top 60%",
            end:"top 30%",
            scrub:2,
        }
    })
    tl5.from(".page-5-image",{
        opacity:0,
        duration:1,
        ease: "power1.inOut",
    
    })
    tl5.from(".text-5",{
        opacity:0,
        duration:1,
        y:-50,
        ease: "power1.inOut",
    
    })
}
page5animation()
function page6animation() {
    var tl6 = gsap.timeline({
        scrollTrigger:{
            trigger:".page-6",
            scroller:"body",
            start:"top 60%",
            end:"top 20%",
            scrub:2,
        }
    })
    tl6.from(".text-6",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
    tl6.from(".div1",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
    tl6.from(".photo-1",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    },"anim20")
    tl6.from(".photo-2",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    },"anim20")
    tl6.from(".div2",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
    tl6.from(".div3",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
}
page6animation()
function page7animation() {
    var tl7 = gsap.timeline({
        scrollTrigger:{
            trigger:".page-7",
            scroller:"body",
            start:"top 60%",
            end:"top 10%",
            scrub:2,
        }
    })
    
    tl7.from(".left-page-7 h2",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    },"b")
    tl7.from(".text-7",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    },"c")
    tl7.from(".video-7",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
    
    tl7.from(".left-page-7 p",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
    tl7.from(".left-page-7 input",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
    tl7.from(".left-page-7 button",{
        opacity:0,
        duration:2,
        y:-50,
        ease: "power1.inOut",
    })
}
page7animation()




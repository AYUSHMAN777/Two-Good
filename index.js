const Locoscroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


function videoconanimation() {
    const videocon = document.querySelector("#video-container");
    const playbtn = document.querySelector("#play");


    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x + "px",
            top: dets.y + "px"
        })
    })


}
videoconanimation();

function loadingheading() {
    gsap.from("#page1 h1 ", {
        y: 100,
        delay: 0.4,
        duration: 0.9,
        stagger: 0.6,
        opacity: 0

    })
}
loadingheading();


function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
        });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){

    // })

    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(1)",
                
            });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(0)",
            });
        });
    });
}
cursorAnimation();  
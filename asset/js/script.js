//mousemove event
var cursor = document.getElementById("cursor");
var blur = document.getElementById("blur");
document.addEventListener("mousemove",function(dets)
{
    cursor.style.left = dets.x + 30 + "px";
    cursor.style.top = dets.y  + "px";

    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
})

//nav ul hover effect
var nav_ul = document.querySelectorAll(".nav_ul li");
nav_ul.forEach(function(elm)
{
    elm.addEventListener("mouseenter",function()
    {
        cursor.style.scale = 2;
        cursor.style.border = "1px solid white";
        cursor.style.background = "transparent";
    })
    elm.addEventListener("mouseleave",function()
    {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid white";
        cursor.style.background = "#95c11e";
    })
})

var scroll_down = document.querySelector("#scroll_down");
scroll_down.addEventListener("mouseenter",function()
{
    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.background = "transparent";
})
scroll_down.addEventListener("mouseleave",function()
{
    cursor.style.scale = 1;
    cursor.style.border = "0px solid white";
    cursor.style.background = "#95c11e";
})

var instagram = document.querySelector(".follow_instagram a");
instagram.addEventListener("mouseenter",function()
{
    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.background = "transparent";
})
instagram.addEventListener("mouseleave",function()
{
    cursor.style.scale = 1;
    cursor.style.border = "0px solid white";
    cursor.style.background = "#95c11e";
})

var footer_link = document.querySelectorAll(".footer_link a");
footer_link.forEach(function(link)
{
    link.addEventListener("mouseenter",function()
    {
        cursor.style.scale = 2;
        cursor.style.border = "1px solid white";
        cursor.style.background = "transparent";
    })
    link.addEventListener("mouseleave",function()
    {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid white";
        cursor.style.background = "#95c11e";
    })
})

//gsap
gsap.to("#nav",{
    backgroundColor: "black",
    padding: "5px 140px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        /* markers: true, */
        start: "top -10%",
        end: "top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor: "black",
    duration: 0.3,
    scrollTrigger:{
        trigger:"#main",
        scroller :"body",
        start :"top -50%",
        end :"top -80%",
        scrub: 1,
    }
})

gsap.from("#about_us div img,#about_info",{
    y:50,
    opacity:0,
    duration:1,
    stagger: 0.4,
    scrollTrigger: {
        trigger :"#about_us",
        scroller:"body",
        start: "top 60%",
        end : "top 55%",
        scrub: 2
    } 
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger :".card",
        scroller:"body",
        start: "top 70%",
        end : "top 65%",
        scrub: 2
    } 
})

gsap.to(".quote_left_img",{
    y: 20,
    duration:0.3,
    scrollTrigger:
    {
        trigger:".quote",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:2
    }
})

gsap.to(".quote_right_img",{
    y: -20,
    duration:0.3,
    scrollTrigger:
    {
        trigger:".quote",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:2
    }
})


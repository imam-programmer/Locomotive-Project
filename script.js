function Loading(){
    let tl=gsap.timeline()
    tl.to("#yellow1",{
    y:"-100%",
    duration:2,
    ease: "expo.out",
    })
    tl.from("#yellow2",{
        y:"100%",
    ease: "expo.out",
        duration:2,
        delay:-1,
    
    },"enem")
    tl.to("#loader h1",{
        delay:-1,
        color:"black"
    },"enem")
    
    tl.to("#loader",{
       display:"none",

    })
}
Loading()
const scroll = new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth:true
});

let elems=document.querySelectorAll(".elem")
let main=document.querySelector("#page2")
elems.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
       let bgimg=ele.getAttribute("data-img")
       main.style.backgroundImage=`url(${bgimg})`
    })
    //     ele.addEventListener("mouseleave",()=>{
    //    let bgimg=ele.getAttribute("data-img")
    //     main.style.backgroundImage=`none`
    // })
})

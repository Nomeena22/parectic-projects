var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imgDiv = document.querySelector("#imgDiv");



main.addEventListener("mousemove" , function(dets){
    // console.log (dets.y);
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease : "back.out(1.8)",
    })
})
imgDiv.addEventListener("mouseenter", function (){
    cursor.innerHTML= "view more";
    gsap.to(cursor, {
        scale : 2.5,
    })
    // console.log("enter");

})
imgDiv.addEventListener("mouseleave", function (){
    cursor.innerHTML = "";
    gsap.to("#cursor" , {
        scale : 1,
    })
    // console.log("enter");

})
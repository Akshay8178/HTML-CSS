var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove" , function(dets){
    crsr.style.left = dets.x -12.5 + "px";
    crsr.style.top = dets.y-12.5 + "px";
})


var crsrblur = document.querySelector("#cursor-b")

document.addEventListener("mousemove" , function(dets){
    crsrblur.style.left = dets.x -75 + "px";
    crsrblur.style.top = dets.y -75 + "px";
})
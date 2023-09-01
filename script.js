var desktopArea = document.querySelector("#main")
var cursor = document.querySelector("#cursor")


desktopArea.addEventListener("mousemove",function(e){
    cursor.style.left = e.x+"px"
    cursor.style.top = e.y+"px"
})
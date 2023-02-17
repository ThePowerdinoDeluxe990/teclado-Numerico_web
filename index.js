const audio = new Audio("SD_NAVIGATE_59.mp3");
const div = document.querySelectorAll("div");



div.forEach(div => {
    div.addEventListener("click", () => {
      audio.play();
    });
  });
document.getElementById("uno").onclick = function(){
 
   document.getElementById("result").innerHTML = 1

}
document.getElementById("dos").onclick = function(){
    document.getElementById("result").innerHTML = 2 
}
document.getElementById("tres").onclick= function (){
    document.getElementById("result").innerHTML = 3
}
document.getElementById("cuatro").onclick = function(){
    document.getElementById("result").innerHTML = 4
}
document.getElementById("cinco").onclick= function(){
    document.getElementById("result").innerHTML = 5
}

document.getElementById("seis").onclick= function(){
    document.getElementById("result").innerHTML = 6
}
document.getElementById("siete").onclick= function(){
    document.getElementById("result").innerHTML = 7
}
document.getElementById("ocho").onclick= function(){
    document.getElementById("result").innerHTML = 8
}
document.getElementById("nueve").onclick= function(){
    document.getElementById("result").innerHTML = 9
}
document.getElementById("dies").onclick= function(){
    document.getElementById("result").innerHTML = 0
}
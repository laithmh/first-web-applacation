let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let h = document.querySelector(".h");

window.onscroll=function () {
    let value =scrollY;
    stars.style.left = value+"px";
    moon.style.top = value *3 +"px";
    mountains3.style.top = value *2 +"px";
    mountains4.style.top = value *1.5 +"px";
    river.style.top = value  +"px";
    boat.style.left = value *3+"px";
    boat.style.top = value +"px";
    h.style.fontSize = value +"px";
    if(scrollY>=63){
        h.style.fontSize = 63 +"px";
        h.style.position = "fixed";
        
    }
    if(scrollY>=439){
       h.style.display = "none";
        
    }else{
        h.style.display = "block";
    }
    if (scrollY>=178){
        document.querySelector(".main").style.background ="linear-gradient(rgb(43 43 89),rgb(117 111 135))"
    }else{
        document.querySelector(".main").style.background ="linear-gradient(rgb(37, 4, 29),rgb(26, 4, 23))"

    }

}
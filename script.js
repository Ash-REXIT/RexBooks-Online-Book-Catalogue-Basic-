var a=document.querySelector(".overlay")
var b=document.querySelector(".pop")
var con=document.querySelector(".container");
function plus(){
    var c=document.getElementById("boti");
    var d=document.getElementById("boau");
    var e=document.getElementById("des");
    a.style.opacity="0.8"
    b.style.opacity="1"
    a.style.zIndex ="1"
    b.style.zIndex ="2"
    c.value=""
    d.value=""
    e.value=""
}
function cancel(event){
    event.preventDefault()
    a.style.opacity="0"
    b.style.opacity="0"
    a.style.zIndex ="-1"
    b.style.zIndex ="-1"
    
}
function add(event){
    event.preventDefault()
    var c=document.getElementById("boti");
    var d=document.getElementById("boau");
    var e=document.getElementById("des");
    var divv=document.createElement("div");
    divv.setAttribute("class","book")
    divv.innerHTML=`<h2>${c.value}</h2>
    <h5>${d.value}</h5>
    <p>${e.value}</p>
    <button onclick="dele(event)"><b>Delete</b></button>`
    con.append(divv)
    a.style.opacity="0"
    b.style.opacity="0"
    a.style.zIndex ="-1"
    b.style.zIndex ="-1"
    
                    
}

function dele(event){
      event.target.closest(".book").remove()

}
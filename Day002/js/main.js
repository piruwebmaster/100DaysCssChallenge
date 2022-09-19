document.addEventListener("DOMContentLoaded",domContentLoadedHandler);

function domContentLoadedHandler(ev){

    var icons = Array.from(document.getElementsByClassName("icon"));

    icons.map(i=>{
        i.addEventListener("click",clickHandler);
    });
}

function clickHandler(ev){
    let target= ev.target.closest(".icon")
    target.classList.remove("no-animation")
    target.classList.toggle("active")
    console.log("toggle")
    return false;
}
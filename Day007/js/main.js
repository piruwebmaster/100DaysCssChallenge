document.addEventListener("DOMContentLoaded",initHanlder);


function initHanlder(){
    document.querySelector(".card-btn-search").addEventListener("click",onSearchClickHandler);
    document.querySelector(".card-btn-menu").addEventListener("click",onBtnMenuClickHandler);
}


function onSearchClickHandler(ev){
    let target = ev.currentTarget;
    document.querySelector(".search-box").classList.toggle("search-box-display-none");
};

function onBtnMenuClickHandler(ev){
    let target = ev.currentTarget;
    document.querySelector(".offcanvas-menu").classList.toggle("move-left");
    document.querySelector(".card").classList.toggle("move-right");
}
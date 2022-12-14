document.addEventListener("DOMContentLoaded",initHandler);

let data1 = [];
let data2 = [];

function initHandler(){

    document.body.addEventListener("mouseover",mouseOverHandler);
    document.body.addEventListener("mouseout",mouseLeaveHandler);

    setInterval(() => {
        updateChart()
    },2500);
    

}




function mouseOverHandler(ev){
    
    if(! ev.target.classList.contains("chart-dot"))
        return false
    let target = ev.target.querySelector(".tooltip-text");
    if(target)
        target.classList.add("display-block");
}

function mouseLeaveHandler(ev){
    if(!ev.target.classList.contains("chart-dot"))
        return false;
    let target = ev.target.querySelector(".tooltip-text");
    if(target)
        target.classList.remove("display-block");
    
}


function updateChart(){
    data1 = fillData(data1);    
    data2 = fillData(data2);    
    
    applyMargin("serie-1", data1)
    applyMargin("serie-2", data2)

    plotLine("serie-1",data1);
    plotLine("serie-2",data2);
}


function plotLine(serieSelector, data){

    let xy = data.map((value,index)=>{
        let dotSelector = `.${serieSelector} .chart-dot.dot-${index+1}`
        var tolTip = document.querySelector(`${dotSelector} .tooltip-text`) ;
        tolTip.innerHTML = 1000 + value;
        return getXY(dotSelector);
    });

    drawLine(`.chart-serie.${serieSelector}`, xy);
}

function drawLine(selector,data){
    let polyline = document.querySelector(selector+ " svg polyline");
    polyline.setAttribute("points", data.join(" "));
}

function getXY(selector){
    let left = document.querySelector(selector).offsetLeft+3;
    let top = document.querySelector(selector).offsetTop+3;
    return `${left}, ${top}`;
}


function fillData(array){
    for(let i=0; i<7;i++){
        array[i] = Math.floor(Math.random() * (30) -15 );
    }
    return array;
}

function applyMargin(serieSelector, serieData){
    serieData.map((value,index)=>{
        applyMarginToDot(`.${serieSelector} .dot-${index+1}`, value)
    });
}

function applyMarginToDot(selector, margin){
    let $dot = document.querySelector(selector);
    $dot.style.marginTop = `${margin}px`;    
}


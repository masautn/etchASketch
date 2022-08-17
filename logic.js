
let mode = 'black'
function init(rows , cols){


const gridContainer = document.getElementById('grid-container');
gridContainer.style.setProperty('--grid-rows', rows);
gridContainer.style.setProperty('--grid-cols', cols);


    for(let i = 0; i< (rows * cols); i++){
        let subgrid = document.createElement(`div`);
        subgrid.id = "subgrid";
        subgrid.addEventListener('mouseover',changeColor)
        gridContainer.appendChild(subgrid);
    }



}

function changeColor(e){

    switch (mode){
        case "black":
            e.target.style.backgroundColor = "black";
            break;
        case "rainbow":
            e.target.style.backgroundColor = rainbowColor();
            break;
        case "erase":
            e.target.style.backgroundColor = "gray";
            break;   
    }
    

}

function rainbowColor(){
 console.log(mode);
 
 const red = getRandomInt(254);
 const green = getRandomInt(254);
 const blue = getRandomInt(254);

 console.log(red);
 console.log(green);
 console.log(blue);
 return (`rgb( ${red}, ${green}, ${blue}`)

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function changeMode(e){
    switch(e.target.id){

        case "blackBtn":
            mode = "black";
            break;
        case "rainbowBtn":
            mode = "rainbow";
            break; 
        case "eraserBtn":
            mode = "erase";
            break;    
    }

}










init(16, 16);


const blackBtn = document.getElementById("blackBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn = document.getElementById("eraserBtn");
const resetBtn = document.getElementById("resetBtn");


blackBtn.addEventListener('click', changeMode );
rainbowBtn.addEventListener('click', changeMode );
eraserBtn.addEventListener('click', changeMode );
resetBtn.addEventListener('click', resetGrid );



function resetGrid(){
    let subgrid = document.querySelectorAll("#subgrid");
    subgrid.forEach(element => {
        element.style.backgroundColor = "gray";
    });
}
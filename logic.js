

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
        
    }
    e.target.style.backgroundColor = "black"

}








init(16, 16);
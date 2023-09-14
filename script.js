let main = document.getElementById("main");
let curcol = "black";

function black(){
    curcol = "black";
}

function pink(){
    curcol = "lightpink";
}

function newCol(){
    this.style.backgroundColor = curcol;
}

function reset(){
    let arr = main.querySelectorAll("div");
    for (i = 0; i < arr.length; i++){
        arr[i].style.backgroundColor = "white";
    }
}

function newgrid(size){
    if (size < 1 || size > 100){
        alert("Number must be between 1 and 100!");
        return;
    }
    let arr = main.querySelectorAll("div");
    for (i = 0; i < arr.length; i++){
        arr[i].remove();
    }
    main.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    main.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < size*size; i++) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.addEventListener("mouseover", newCol);
        main.appendChild(item);
    }
}

newgrid(32);
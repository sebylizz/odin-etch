let main = document.getElementById("main");
let size = 50;
let curcol = "black";

main.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
main.style.gridTemplateRows = `repeat(${size} , 1fr)`;

function black(){
    curcol = "black";
}

function pink(){
    curcol = "pink";
}

function newCol(){
    this.style.backgroundColor = curcol;
}

function reset(){
    let arr = main.querySelectorAll("div");
    for (i = 0; i < size*size; i++){
        arr[i].style.backgroundColor = "white";
    }
}

for (let i = 0; i < size*size; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    item.addEventListener("mouseover", newCol);
    main.appendChild(item);
}
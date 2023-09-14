let main = document.getElementById("main");
let size = 75;
main.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
main.style.gridTemplateRows = `repeat(${size} , 1fr)`;

function newCol(){
    this.style.backgroundColor = "black";
}

for (let i = 0; i < size*size; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    item.addEventListener("mouseover", newCol);
    main.appendChild(item);
}
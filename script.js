const pad = document.querySelector(".container");
const gridSizeBox = document.querySelector(".gridSize");
const changeGridSizeBtn = document.querySelector("#gridBtn");
const clearBtn = document.querySelector("#clearBtn")
let squareColor = "green";
let colour = "off";
let gridNum = 16;

changeGridSizeBtn.addEventListener("click", function () {
    let userNum = window.prompt("Enter the size of grid");
    if (userNum == null || userNum <= 0 || userNum > 100|| isNaN(userNum)) {
        alert("Please type a number between 1 and 100")
        return;
    } else {
        gridNum = userNum;
        emptyGrid(pad);
        padFill(gridNum);
    }

});

const emptyGrid = function removeAllChildNodes(pad) {
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
}

const clearPad = function () {
    const cleanSquare = Array.from(document.querySelectorAll('.column'));
    cleanSquare.forEach(square => square.style.backgroundColor = "rgb(249, 249, 172)");
}


clearBtn.addEventListener("click", function () {
    clearPad();
})

let addSquares = function () {
    const row = document.createElement("div");
    row.classList.add("row");
    pad.appendChild(row)
    for (let i = 0; i < gridNum; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }


    const squares = Array.from(document.querySelectorAll('.column'));
    squares.forEach(square => square.addEventListener("mouseenter", function (event) {
        if (colour == "off") {
            event.target.style.backgroundColor = squareColor;

        } else event.target.style.backgroundColor = randColor();

    }))
}

let padFill = function (num) {
    for (let i = 0; i < num; i++) {
        addSquares();
    }
}


padFill(gridNum);






let color = "black"

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16)

    let settingsOnClick = document.querySelector("#prompt")
    settingsOnClick.addEventListener("click", function(){
        let size = boardSize();
        createBoard(size);
    })

    console.log("hi")
})

function createBoard(size) {
    let board = document.querySelector("#container")
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 1; i <= size*size; i++){
        let div = document.createElement("div")
        
        div.addEventListener("mouseover", colorDiv)

        container.insertAdjacentElement("beforeend", div)
    }
}

function boardSize() {
    let input = prompt("Enter no of Grids");
    let message = document.querySelector("#message")
    
    if (input > 0 && input < 100) {
        message.innerHTML = "Enjoy Drawing!"
        return input;
    } else {
        message.innerHTML = "Please enter a number between 1 and 100"
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice) {
    color = colorChoice
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => {
        div.style.backgroundColor = 'white'
    });
}
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.getElementById("messageDisplay");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

resetButton.addEventListener("click", function() {
   reset();
});


function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                console.log("easy");
                numSquares = 3;
            } else {
                console.log("hard");
                numSquares = 6;
            }
            console.log("run reset");
            reset();
        })
    }
}

function setupSquares() {
    for(var j=0; j<squares.length; j++) {
        squares[j].style.backgroundColor = colors[j];
        squares[j].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor) {
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color) {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColor(num) {
    var colorCodes = [];
    for(var i=0; i<num; i++) {
        colorCodes.push(randomColor());
    }

    return colorCodes
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset() {
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}
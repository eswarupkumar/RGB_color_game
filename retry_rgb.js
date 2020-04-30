var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var displayWin = document.querySelector("#message2");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
var RGB="NULL";//initial value of the RGB
var bodyCol="#232323";//initial color of the background

//initiating the game
init ();
//function to initiate the game
function init(){
  setupModeButtons();
  setupSquares();
  reset();
}


function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    })
  }
}
function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i]
    //add click listeners to squares
      squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
          messageDisplay.textContent="";
          displayWin.textContent = " CORRECT";
          //changes the body background to correct color 
          changeBackground(clickedColor);
          bodyCol=clickedColor;
          //changes the color of all the squares to the correct color
          changeColors(clickedColor);

          // h1.style.background = clickedColor;
          resetButton.textContent = "RETRY";

          } else {
          this.style.background = "black";
          messageDisplay.textContent = "You gotta do it ! Keep Trying";
         
    }
  });
  }
}

//function to change background color of the body 
function changeBackground(color){
     document.body.style.background = color;
  }

function reset(){
  //generate all new colors
 changeBackground("black");
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent ="";
  resetButton.textContent = "RESET";
  displayWin.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none"
    }
    squares[i].style.background = colors[i];
  }
  
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []
  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() *256);
  //pick a "green" from 0 to 255
  var g = Math.floor(Math.random() *256);
  //pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() *256);
  RGB="(" + r + ", " + g + ", " + b + ")";

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
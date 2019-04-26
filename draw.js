var redButton = document.getElementById("btnRed");
var greenButton = document.getElementById("btnGreen");
var yellowButton = document.getElementById("btnYellow");
var purpleButton = document.getElementById("btnPurple");
var smallButton = document.getElementById("btnSmall");
var normalButton = document.getElementById("btnNormal");
var largeButton = document.getElementById("btnLarge");
var hugeButton = document.getElementById("btnHuge");
var clearButton = document.getElementById("btnClear");

redButton.addEventListener("click", function changeColor() {
  alert("Red");
});
greenButton.addEventListener("click", function displayMessage() {
  alert("you have clicked the Green button");
});
yellowButton.addEventListener("click", function displayMessage() {
  alert("you have clicked the Yellow button");
});
purpleButton.addEventListener("click", function displayMessage() {
  alert("you have clicked the Purple button");
});

//For selcting size
smallButton.addEventListener("click", function displayMessage() {
  alert("you have clicked the Small button");
});
normalButton.addEventListener("click", function displayMessage() {
  alert("you have clicked the Normal button");
});
largeButton.addEventListener("click", function displayMessage() {
  alert("you have clicked the Large button");
});
hugeButton.addEventListener("click", function displayMessage() {
  alert("you have clicked the Huge button");
});

//For clearing
clearButton.addEventListener("click", function displayMessage() {});

$("document").ready(function() {
  var canvas = document.getElementById("draw");
  var paint, context, mouseX, mouseY;
  var clickX = new Array();
  var clickY = new Array();
  var clickDrag = new Array();
  var width = 600;
  var height = 400;
  //Listening to mouse down event
  if (canvas.addEventListener) {
    canvas.addEventListener("mousedown", function(e) {
      paint = true;
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;
      addClick(mouseX, mouseY);
      reDraw();
    });
  }

  //Listening to the mouse move event
  if (canvas) {
    if (canvas.addEventListener) {
      canvas.addEventListener("mousemove", function(e) {
        if (paint) {
          addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
          reDraw();
        }
      });
    }
  }

  //Listening to mouse up event
  if (canvas) {
    if (canvas.addEventListener) {
      canvas.addEventListener("mouseup", function(e) {
        paint = false;
      });
    }
  }
  //Listening to mouse leave event
  if (canvas) {
    if (canvas.addEventListener) {
      canvas.addEventListener("mouseleave", function(e) {
        paint = false;
      });
    }
  }

  //Defining the function called addClick
  function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }
  //Defining the function called reDraw
  function reDraw() {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;
    for (var i = 0; i < clickX.length; i++) {
      context.beginPath();
      if (clickDrag[i] && i) {
        context.moveTo(clickX[i - 1], clickY[i - 1]);
      } else {
        context.moveTo(clickX[i] - 1, clickY[i]);
      }
      context.lineTo(clickX[i], clickY[i]);
      context.closePath();
      context.stroke();
    }
  }
});

$("document").ready(function() {
  var canvas = document.getElementById("draw");
  var paint, context, mouseX, mouseY, cursColor, brushSize;
  var clickX = new Array();
  var clickY = new Array();
  var clickDrag = new Array();
  var clickColor = new Array();
  var clickSize = new Array();
  var width = 600;
  var height = 400;
  //Listening to mouse down event
  if (canvas.addEventListener) {
    canvas.addEventListener("mousedown", function(e) {
      paint = true;
      mouseX = e.pageX - this.offsetLeft;
      mouseY = e.pageY - this.offsetTop;
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
    clickColor.push(cursColor);
    clickSize.push(brushSize);
  }
  //Defining the function called reDraw
  function reDraw() {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    // context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    // context.lineWidth = 5;
    for (var i = 0; i < clickX.length; i++) {
      context.beginPath();
      if (clickDrag[i] && i) {
        context.moveTo(clickX[i - 1], clickY[i - 1]);
      } else {
        context.moveTo(clickX[i] - 1, clickY[i]);
      }
      context.lineTo(clickX[i], clickY[i]);
      context.strokeStyle = clickColor[i];
      context.lineWidth = clickSize[i];
      context.closePath();
      context.stroke();
    }
  }
  //Event listener for clearing
  var clearButton = document.getElementById("btnClear");
  if (clearButton) {
    if (clearButton.addEventListener) {
      clearButton.addEventListener("click", function(e) {
        if (canvas) {
          context = canvas.getContext("2d");
          context.clearRect(0, 0, width, height);
          clickX.length = 0;
          clickY.length = 0;
          clickDrag.length = 0;
        }
      });
    }
  }

  //Select color of brush

  //Select red brush color
  var btnRed = document.getElementById("btnRed");
  if (btnRed) {
    if (btnRed.addEventListener) {
      btnRed.addEventListener("click", function(e) {
        cursColor = "red";
      });
    }
  }

  //Select Green brush color
  var btnGreen = document.getElementById("btnGreen");
  if (btnGreen) {
    if (btnGreen.addEventListener) {
      btnGreen.addEventListener("click", function(e) {
        cursColor = "green";
      });
    }
  }

  //Select purple brush color
  var btnPurple = document.getElementById("btnPurple");
  if (btnPurple) {
    if (btnPurple.addEventListener) {
      btnPurple.addEventListener("click", function(e) {
        cursColor = "purple";
      });
    }
  }

  //Select yellow brush color
  var btnYellow = document.getElementById("btnYellow");
  if (btnYellow) {
    if (btnYellow.addEventListener) {
      btnYellow.addEventListener("click", function(e) {
        cursColor = "yellow";
      });
    }
  }

  //Selecting brush size

  //select small brush size
  var btnSmall = document.getElementById("btnSmall");
  if (btnSmall) {
    if (btnSmall.addEventListener) {
      btnSmall.addEventListener("click", function(e) {
        brushSize = 2;
      });
    }
  }

  //select normal brush size
  var btnNormal = document.getElementById("btnNormal");
  if (btnNormal) {
    if (btnNormal.addEventListener) {
      btnNormal.addEventListener("click", function(e) {
        brushSize = 5;
      });
    }
  }

  //select large brush size
  var btnLarge = document.getElementById("btnLarge");
  if (btnLarge) {
    if (btnLarge.addEventListener) {
      btnLarge.addEventListener("click", function(e) {
        brushSize = 10;
      });
    }
  }

  //Select huge brush szie
  var btnHuge = document.getElementById("btnHuge");
  if (btnHuge) {
    if (btnHuge.addEventListener) {
      btnHuge.addEventListener("click", function(e) {
        brushSize = 20;
      });
    }
  }
});

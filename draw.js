var redButton = document.getElementById("btnRed");
var greenButton = document.getElementById("btnGreen");
var yellowButton = document.getElementById("btnYellow");
var purpleButton = document.getElementById("btnPurple");
var smallButton = document.getElementById("btnSmall");
var normalButton = document.getElementById("btnNormal");
var largeButton = document.getElementById("btnLarge");
var hugeButton = document.getElementById("btnHuge");

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

var redButton = document.getElementById("btnRed");
var greenButton = document.getElementById("btnGreen");
var yellowButton = document.getElementById("btnYellow");
var purpleButton = document.getElementById("btnPurple");

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

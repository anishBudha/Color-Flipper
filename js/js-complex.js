const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randomGenerator() {
  return Math.floor(Math.random() * hexNumbers.length);
}

document.getElementById("change").onclick = function () {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += hexNumbers[randomGenerator()];
  }

  document.body.style.backgroundColor = hex;
  document.getElementById("colorName").innerHTML = hex;
};

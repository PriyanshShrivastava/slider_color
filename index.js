let redValue;
let greenValue;
let blueValue;

function rgb(r, g, b) {
  // complete this function
  return `#${hexC(r) + hexC(g) + hexC(b)}`;
}
function hexC(v) {
  if (v > 255) {
    v = 255;
  } else if (v < 0) {
    v = 0;
  }
  let a = v % 16;
  let b = Math.floor(v / 16);
  return hmaps[b] + hmaps[a];
}
let hmaps = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};
$("#my-range-red").on("input change", function () {
  redValue = this.value;
});

$("#my-range-green").on("input change", function () {
  greenValue = this.value;
});

$("#my-range-blue").on("input change", function () {
  blueValue = this.value;
});

$("#get-colour").on("click", function () {
  let mainOutput = rgb(redValue, greenValue, blueValue);
  console.log(mainOutput);
  let showColour = $("#show-colour");
  showColour.css("background-color", `${mainOutput}`);
  showColour.text(`${mainOutput}`);
});

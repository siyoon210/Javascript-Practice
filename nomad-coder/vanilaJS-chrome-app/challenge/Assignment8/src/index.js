// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.querySelector('input[type="range"]');
const playNumber = document.querySelector('input[type="number"]');
const playBtn = document.querySelector('input[type="button"]');
const selectedRangeNumberElement = document.getElementById(
  "selected-range-number"
);
const result = document.getElementById("result");

range.addEventListener("change", () => {
  selectedRangeNumberElement.innerText = range.value;
});

playBtn.addEventListener("click", () => {
  if (playNumber.value === "") {
    alert("Guess the number!");
    return;
  }

  const randomNumber = Math.floor(Math.random() * (parseInt(range.value) + 1));

  result.innerHTML = `
  <p>You chose: ${playNumber.value}, the machine chose: ${randomNumber}</p>
   <h3>${playNumber.value == randomNumber ? "You won!" : "You lost!"}</h3>`;
});

// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const result = document.getElementById("js-result");
let num1 = 0;
let num2 = null;
let operator = null;

document.querySelectorAll(".js-number").forEach((jsNum) => {
  jsNum.addEventListener("click", (event) => {
    if (operator) {
      setNum2(event.target.id);
    } else {
      setNum1(event.target.id);
    }
  });

  function setNum2(targetValue) {
    if (num2) {
      num2 = parseFloat(num2 + targetValue);
    } else {
      num2 = parseFloat(targetValue);
    }
    result.innerText = num2;
  }

  function setNum1(targetValue) {
    if (num1) {
      num1 = parseFloat(num1 + targetValue);
    } else {
      num1 = parseFloat(targetValue);
    }
    result.innerText = num1;
  }
});

document.getElementById("js-reset").addEventListener("click", () => {
  num1 = 0;
  num2 = null;
  operator = null;
  result.innerText = 0;
});

document.querySelectorAll(".js-operator").forEach((jsOpererator) => {
  jsOpererator.addEventListener("click", (event) => {
    if (isComputable()) {
      calculate();
    }

    operator = Function(`num1`, `num2`, `return num1 ${event.target.id} num2`);
  });
});

document.getElementById("js-equals").addEventListener("click", () => {
  if (isComputable()) {
    calculate();
  }
});

function isComputable() {
  return (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    typeof operator === "function"
  );
}

function calculate() {
  const calculatedNumber = operator(num1, num2);
  num1 = calculatedNumber;
  num2 = null;
  operator = null;
  result.innerText = calculatedNumber;
}

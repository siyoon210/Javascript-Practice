// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const result = document.getElementById("js-result");
let num1 = null;
let num2 = null;
let operator = null;

document.querySelectorAll(".js-number").forEach((num) => {
  num.addEventListener("click", (event) => {
    if (operator) {
      if (num2) {
        num2 = parseInt(num2 + targetValue);
      } else {
        num2 = parseInt(event.target.id);
      }
      result.innerText = num2;
    } else {
      if (num1) {
        num1 = parseInt(num1 + event.target.id);
      } else {
        num1 = parseInt(event.target.id);
      }
      result.innerText = num1;
    }
  });
});

document.getElementById("js-reset").addEventListener("click", () => {
  num1 = null;
  num2 = null;
  operator = null;
  result.innerText = 0;
});

document.getElementById("js-plus").addEventListener("click", () => {
  if (isComputable()) {
    calculate();
  }
  operator = (num1, num2) => {
    return num1 + num2;
  };
});

document.getElementById("js-minus").addEventListener("click", () => {
  if (isComputable()) {
    calculate();
  }
  operator = (num1, num2) => {
    return num1 - num2;
  };
});

document.getElementById("js-times").addEventListener("click", () => {
  if (isComputable()) {
    calculate();
  }
  operator = (num1, num2) => {
    return num1 * num2;
  };
});

document.getElementById("js-divider").addEventListener("click", () => {
  if (isComputable()) {
    calculate();
  }
  operator = (num1, num2) => {
    return num1 / num2;
  };
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

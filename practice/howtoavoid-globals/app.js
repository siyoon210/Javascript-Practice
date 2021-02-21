/* 1. 글로벌 변수 더덕 - 글로벌 함수는 지양하는 것이 좋다.  
그 이유는 페이지에 포함 된 모든 JavaScript 파일이 동일한 범위에서 실행되기 때문입니다. 
코드에 전역 변수 또는 함수가있는 경우 동일한 변수 및 함수 이름을 포함하는 스크립트 뒤에 포함 된 스크립트가 변수 / 함수를 덮어 씁니다.*/
// const span = document.querySelector("span");
// let count = 0;

// setInterval(() => {
//   count++;
//   span.innerText = count;
// }, 1000);

// function resetCount() {
//   count = 0;
//   span.innerText = count;
// }

/* 2. init()이라는 함수로 감싼다. - 이런경우 resetCount()라는 변수를 사용할 수 없게된다.*/
// function init() {
//   const span = document.querySelector("span");
//   let count = 0;

//   setInterval(() => {
//     count++;
//     span.innerText = count;
//   }, 1000);

//   function resetCount() {
//     count = 0;
//     span.innerText = count;
//   }
// }

// init();

/* 3. 클로저를 사용하여서 resetCount만 노출시키기 
app.resetCount()를 사용하여서 접근이 가능해졌다.
근데 INIT()이라는 무의마한 함수명이 글로벌 스코프에 노출되는 문제가 있다.
*/
function init() {
  const span = document.querySelector("span");
  let count = 0;

  setInterval(() => {
    count++;
    span.innerText = count;
  }, 1000);

  function resetCount() {
    count = 0;
    span.innerText = count;
  }

  return { resetCount: resetCount };
}

const app = init();

/* 3.5 익명으로만 만들면 또 사용할수가 없자나 */
/* 4. 익명함수 iife를 사용하여 INIT사용하지 않기 
모듈패턴*/
// const app = (function () {
//   const span = document.querySelector("span");
//   let count = 0;

//   setInterval(() => {
//     count++;
//     span.innerText = count;
//   }, 1000);

//   function resetCount() {
//     count = 0;
//     span.innerText = count;
//   }

//   return { resetCount: resetCount };
// })();

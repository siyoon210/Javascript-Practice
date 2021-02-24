[실전형 리액트 Hooks 10개 - 노마드코더](https://nomadcoders.co/react-hooks-introduction/lobby)

# Introduction

- 이전에는 class형 컴포넌트의 경우만 state 기능 및 라이프 사이클 기능을 사용 가능했다.
- 지금은 리액트 훅을 사용하여서 function 컴포넌트에서도 state기능 및 라이프 사이클을 다룰 수 있게 되었다.
- function 컴포넌트를 사용하면 더 간결하다!

# useState를 사용하는 방법

1. import useState
   - `import React, { useState } from 'react';`
2. useState() 호출하여서 value와 setter 가져오기
   - `const [count, setCount] = useState(0);`
   - userState()는 인자로 초기값을 받고, 배열을 반환한다. 0번째 인덱스에는 해당 value를 사용하는 변수를 반환하고 1번째 인덱스에는 setter를 반환한다.
3. 사용하기

```js
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- https://reactjs.org/docs/hooks-overview.html

# useEffect 사용하기

- The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- 첫번째 인자로 핸들러 콜백을 담아준다.
- useState는 state를 function 컴포넌트에서 사용가능하게 하고, useEffect는 class 컴포넌트의 라이프사이클와 유사한 기능을 주는 것이구나!
- 위와 같은 경우 componentWillUpdate와 유사하다. count가 변경될 때 마다 useEffect 콜백이 실행된다.
- https://reactjs.org/docs/hooks-overview.html#effect-hook

```js
const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(sayHello, [number]); //number가 바뀔 때 만 실행된다!
};
```

- 두번째 인자로 배열형태의 의존하는 value를 넣어주면, 해당 value가 set 될때에만 useEffect 핸들러 콜백이 실행된다. (아무것도 명시하지 않으면 모든 경우에 반응)

- `useEffect(sayHeel, [])` 이러한 경우 어떠한 변화에도 콜백이 실행되지 않고, 오로지 컴포넌트가 처음 렌더링 될때만 시행된다. (== componentDidMount와 비슷한거 같아.)

# reference
- component의 원하는 부분을 선택할 수 있는 방법 (document.getElementById와 유사하다)

1. import useRef 
	- `import React, { useRef } ` from "react"
2. reference로 사용할 변수 생성
	- `const potato = useRef();`
3. ref attribute에원하는 변수명 할당
	- `<input ref = { potato } />`
4. ref 변수 사용하기
	- `setTimeout(() => potato.currenct.foucse(), 5000);`

# useClick
- useEffect를 활용하여 클릭이벤트
```js
const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if(element.current) {
      element.currenct.addEventListener("click", onClick);
    }
    return element;
  });

const App = () => { 
 const sayHello = () => console.log("say Hello");
 const title = useClick(sayHello);

 return (
  <div className="App">
    <h1 ref={title}>Hi</h1>
  </div>
  )
}
 )
}
```

[실전형 리액트 Hooks 10개 - 노마드코더](https://nomadcoders.co/react-hooks-introduction/lobby)

# 1.0 Introduction to useState

- 이전에는 class형 컴포넌트의 경우만 state 기능 및 라이프 사이클 기능을 사용 가능했다.
- 지금은 리액트 훅을 사용하여서 function 컴포넌트에서도 state기능 및 라이프 사이클을 다룰 수 있게 되었다.
- function 컴포넌트를 사용하면 더 간결하다!

# 리액트 훅을 사용하는 방법

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

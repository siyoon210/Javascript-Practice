[ReactJS로 영화 웹 서비스 만들기 (노마드 코더)](https://nomadcoders.co/react-fundamentals/lectures/1544)

# 0 INTRODUCTION
- 필요한 프로그램들 `npm`, `node.js`, `npx`
- 리액트는 수요가 많다. 
- Q) 리액트는 어떤 문제점을 해결하는 프레임워크 일까?

# 1 SETUP
## 1.0 Creating your first React App
- 프로젝트 생성
	- 생성을 원하는 디렉토리에서 `npx create-react-app movie-app`
- 프로젝트 실행
	- `cd movie-app`
	- `npm start`
- VSC로 프로젝트 바로열기
	- `code movie-app`
	- 혹은 그냥 VSC에서 open 해도 무관
- package.json 파일에 여러 기본 설정들이 되어있다.
	- 지금은 scripts의 start, build에만 집중하자.
- yarn.lock은 삭제

## 1.2 How does React work? 
- index.html에는 껍대기만 존재하고, src/App.js src/index.js를 통해서 HTML을 리액트가 생성하도록 했다.

# 2 JSX & PROPS
## 2.0 Creating your first React Component
- `Component`는 HTML 반환하는 함수다!
- 리액트의 모든 것은 Component로 이뤄져 있다.
- `JSX`는 Javascript + HTML이다. HTML 처럼 작성하고 중간에 JS코드를 넣고 싶다면 {...}를 쓴다.

```
import React from "react"

function Potato() {
    return <h3>I love potato.</h3>;
}

export default Potato;
```
```
import React from "react";
import Potato from "./Potato"

function App() {
  return (
    <div>
      Hello!
      <Potato />
    </div>
  )
}

export default App

```

## 2.1 Reusable Components with JSX + Props
- Component는 재사용이 가능하면 props 정보로 argument를 넣을 수 있다
```
import React from "react"

function Food({ fav }) {
    return <h3>I love {fav}.</h3>
}

export default Food
```
```
import React from "react";
import Food from "./Food"

function App() {
  return (
    <div>
      Hello!
      <Food fav="kimchi" />
      <Food fav="ramen" />
    </div>
  )
}

export default App
```

## 2.2 Dynamic Component Generation
- JS array의 map() 메서드를 활용한 컴포넌트 동적 생성
```
import React from "react";
import Food from "./Food"

const foodILike = [{name: "kimchi"}, {name: "ramen"}, {name: "fried chicken"}]

function App() {
    return (
        <div>
            {foodILike.map((food) => {
                return <Food fav={food.name}/>
            })}
        </div>
    )
}

export default App
```

## 2.3 map recap
- `Warning: Each child in a list should have a unique "key" prop.`
- array component는 식별을 하기위한 'key'라는 값이 필요하다. 유니크값으로 'key'를 지정해준다면 에러가 발생하지 않는다.
```
import React from "react";
import Food from "./Food"

const foodILike = [{id: 1, name: "kimchi"}, {id: 2, name: "ramen"}, {id: 3, name: "fried chicken"}]

function App() {
    return (
        <div>
            {foodILike.map((food) => {
                return <Food key={food.id} fav={food.name}/>
            })}
        </div>
    )
}

export default App
```

## 2.4 Protection with PropTypes
- prop-types 설치
	- `npm i prop-types`
- 자식 component에서 전달받은 props가 원하는 props가 맞는지 확인해준다.
- TypeScript를 사용할 수 있다면 TS가 더 나은 선택지
```
import React from "react"
import PropTypes from "prop-types"

function Food({ fav }) {
    return <h3>I love {fav}.</h3>
}

Food.propTypes = {
    fav: PropTypes.string.isRequired
}

export default Food
```

- 공식문서 https://ko.reactjs.org/docs/typechecking-with-proptypes.html

# 3 STATE
## 3.0 Class Components and State
- Function Components vs Class Components
	> 함수형 컴포넌트는 클래스형 컴포넌트보다 선언하기가 좀 더 편하고, 메모리 자원을 덜 사용한다는 장점
	> 클래스형 컴포넌트의 경우 state 기능 및 라이프 사이클 기능을 사용할 수 있으며 임의 메서드를 정의할 수 있다는 점이다.
	> 과거에는 클래스형 컴포넌트를 주로 사용했지만, 2019년 v16.8 부터 함수형 컴포넌트에 리액트 훅(hook)을 지원해 주어서 현재는 공식 문서에서 함수형 컴포넌트와 훅을 함께 사용할 것을 권장하고 있다.
  
- Props vs State
	> state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다. props의 경우 부모 컴포넌트가 설정해서 자식 컴포넌트는 읽기만 할 수 있는 값이며 바꾸기 위해서는 부모 컴포넌트에서 직접 변경을 해야 한다. 자식 컴포넌트 내에서 값을 변화하여야 하는 경우 state를 사용한다.

- https://devowen.com/298

```
import React from "react";

class App extends React.Component {
    state = {
        count: 0
    }

    plus = () => {
        console.log('plus')
    }

    minus = () =>{
        console.log('minus')
    }

    render() {
        return (
            <div>
                <h1> The number is {this.state.count} </h1>
                <button onClick={this.plus}>plus</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}

export default App

```



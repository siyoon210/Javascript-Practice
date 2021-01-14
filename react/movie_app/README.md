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
- `JSX`는 Javascript로 만드는 HTML이다.





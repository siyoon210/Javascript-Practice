[바닐라 JS로 크롬 앱 만들기 - 노마드코더](https://nomadcoders.co/javascript-for-beginners)

# JS로 DOM을 다루는 이벤트는 MDN페이지를 보자!

- 나는 JS DOM 이벤트를 진짜 모르는구나
- https://developer.mozilla.org/ko/docs/Web/Events

# localstorage

```js
localstorage.setItem(key, value);

const value = localstorage.getItem(key);
```

# document.querySelector()

- Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다.
- 즉, 여러개가 만족되어도 하나만 반환한다.
- 선택자를 만족하는 모든 요소의 목록이 필요하다면 querySelectorAll()을 대신 사용하세요.

```js
const el = document.querySelector(".myclass");
```

# querySelector()나, getElementByClassName().. 은 꼭 document로 부터 사용하지 않아도 된다!

- document와 element는 다른 객체이지만 같은 메서드를 많이 가지고 있구나!

```js
var f = document.getElementById("mainform");
var inputs = f.getElementsByTagName("input");
```

- 난 정말 document와 element객체를 모른다.
- https://developer.mozilla.org/ko/docs/Web/API/Document
- https://developer.mozilla.org/ko/docs/Web/API/Element

# document.createElement()

- HTML 문서에서, Document.createElement() 메서드는 지정한 tagName의 HTML 요소를 만들어 반환합니다.
- 반환오브젝트는 `Element`다.
  - https://developer.mozilla.org/ko/docs/Web/API/Element

```js
const newDiv = document.createElement("div");
```

# JSON 다루기

- JSON.parse() : 문자열 -> JSON
- JSON.stringify() : JSON -> 문자열

# event

- Event 인터페이스는 DOM 내에 위치한 이벤트를 나타냅니다.
- 이벤트는 마우스를 클릭하거나 키보드를 누르는 등 사용자 액션에 의해 발생할 수도 있고, 혹은 비동기적 작업의 진행을 나타내기 위해 API가 생성할 수도 있습니다.
- Event.target : 이벤트가 처음에 발생했던 대상의 참조입니다.
- https://developer.mozilla.org/ko/docs/Web/API/Event

# navigator 객체

- Navigator 인터페이스는 사용자 에이전트의 상태와 신원 정보를 나타냅내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.
- https://developer.mozilla.org/ko/docs/Web/API/Navigator

# fetch

- Fetch API는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있습니다. XMLHttpRequest와 같은 비슷한 API가 존재합니다만, 새로운 Fetch API는 좀더 강력하고 유연한 조작이 가능합니다.

- https://developer.mozilla.org/ko/docs/Web/API/Fetch_API
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
- https://developer.mozilla.org/en-US/docs/Web/API/Response

# 결론

- 너무 많은 객체들을 알지도 못하고 주먹구구식으로만 써왔다. 다른 언어나 프레임워크를 배울때도 이점을 유의하자. 문서를 가까이 한다면 느리지만 시야가 넓어질 수 있다.

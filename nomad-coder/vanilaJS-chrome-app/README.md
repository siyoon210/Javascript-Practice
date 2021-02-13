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

# Document.createElement()

- HTML 문서에서, Document.createElement() 메서드는 지정한 tagName의 HTML 요소를 만들어 반환합니다.

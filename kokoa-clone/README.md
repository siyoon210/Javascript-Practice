[코코아톡 클론코딩 (노마드코더 HTML,CSS 초급)](https://nomadcoders.co/kokoa-clone)

# 2 LEARNING HTML
- HTML tag `<tagName attribute="value">content</tagName>`
- HTML 문서 형식
	```html
	<!DOCTYPE html>
	<html>
		<head>
			<!--보이지 않는 문서 정보들, 타이틀, charset, 파비콘, 검색엔진에 보여주는 정보들, opengraph 정보들 ...-->
  		</head>
		<body>
			<!--보여지는 문서 header, main, footer ...-->
		</body>
  	</html>
  	```

- html tag와 attribute를 사용할 때  MDN문서를 한번 확인해보자. 내가 생각지도 못한 기능을 제공해 줄지도 모른다.

- 의미론적 (semantic) 태그의 사용을 지향하자.
	- `<header>`는 `<div id="header">` 보다 의미론적이다.
	- `<main>`은 `<div id="main">`보다 의미론적이다.
	- `<footer>`, `<aside>`, `<address>`...

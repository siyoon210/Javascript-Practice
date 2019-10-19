# HTML-CSS-JS

## (19.10.19) (Ajax로) 동적 렌더링한 html에 이벤트 바인딩하기
### 1. jQuery (혹은 vanilla js)
- 방법1. 이벤트 바인딩 하는 코드를 렌더링 직후에 실행시킨다.
- 방법2. $(document).on(types, selector, fn)를 사용하여 바인딩 시킨다.
    ```
    $(document).on("click", '.js-request-data', function () {
                //do something
    });
    ```

### 2. jsView를 사용하기
- 이벤트를 담고 있는 helpers를 별도로 선언하여서 바인딩 해주는 방식으로 구현한다.
- 3가지 방법이 있다. 아래는 jQuery를 사용하여서 바인딩 하는 방법
```
var helpers = {
  doSomething: function() {
    alert("do something");
  }
}

tmpl.link("#result", person); // Render and link the template

// Attach handler to buttons (class 'myButton'), whethe법r in top-level or rendered content.
$(".myButton").on("click", helpers.doSomething);
```
- https://www.jsviews.com/#link-events
- 실습파일 :  jsRender/jsview-event-binding.html

## (19.10.18) 
### ~~jQuery Templates plugin~~ 
- ~~다운로드 및 사용방법 https://github.com/BorisMoore/jquery-tmpl~~
- ~~실습파일 jquery-tmpl.html~~

### jsRender, jsView
- jQuery Templates Plugin은 jsRender로 대체 되었다. (같은 보리스 무어가 만들었다.)
- 공식사이트 ㅣ https://www.jsviews.com
- jsRender는 html을 렌더링 하는 라이브러리고, jsView는 렌더링된 html에 데이터를 바인딩 하는 라이브러리다.
- 실습파일 : jsRender/jsrender-exam.html
# HTML-CSS-JS

## (19.11.21) Prototype
- 자바스크립트는 프로토타입 프로그래밍이다. (일단 자바의 클래스랑 다르다는 것 정도만 기억하자)
- 프로토타입 그 자체로 객체다.
- 모든 객체들은 **prototype** 이라고 하는 프로퍼티를 자동으로 가지고 있다.
```
    function Super() {}
    Super.prototype.myProp = 'world';

    function Sub() {}
    Sub.prototype = new Super(); //이건 프로토타입방식의 상속문법이라고 생각하자. 프로토타입을 바로 넣어주면 안됨
```
- 이러한 방식이 상속을 구현하는 방식이다. 하위타입 프로토타입의 상위타입의 생성자를 넣어주자. (프로토타입을 넣으면 안됨)
- 실습파일 js/prototype/prototype.html

## (19.10.20) var, let, const 의 차이
- var : function-scoped, 가변적 (es5 이전 버전에서 사용)
- let : block-scoped, 가변적 (es6 이후 버전에서 사용)
- const : block-scoped, 불변적 (es6 이후 버전에서 사용)

## (19.10.19) (Ajax로) 동적 렌더링한 html에 이벤트 바인딩하기
### 1. jQuery (혹은 vanilla js)
- 방법1. 이벤트 바인딩 하는 코드를 렌더링 직후에 실행시킨다.
- 방법2. $(document).on(types, selector, fn)를 사용하여 바인딩 시킨다.
    ```
    $(document).on("click", '.js-request-data', function () {
                //do something
    });
    ```

### 2. jsViews를 사용하기
- 이벤트를 담고 있는 helpers를 별도로 선언하여서 바인딩 해주는 방식으로 구현한다.
- jsViews로 link()를 호출할때 이벤트 function을 같이 바인딩 시킨다,
```
    var tmpl = $.templates("#tmpl");

    var person = {};

    var helpers = {
        doSomething: function() {
            alert("do something");
        }
    }

    tmpl.link("#result", person, helpers); // Render and link the template
```
- https://www.jsviews.com/#link-events
- 실습파일 :  jsRender/jsviews-dynamic-event-binding.html

## (19.10.18) 
### ~~jQuery Templates plugin~~ 
- ~~다운로드 및 사용방법 https://github.com/BorisMoore/jquery-tmpl~~
- ~~실습파일 jquery-tmpl.html~~

### jsRender, jsView
- jQuery Templates Plugin은 jsRender로 대체 되었다. (같은 보리스 무어가 만들었다.)
- 공식사이트 ㅣ https://www.jsviews.com
- jsRender는 html을 렌더링 하는 라이브러리고, jsView는 렌더링된 html에 데이터를 바인딩 하는 라이브러리다.
- 실습파일 : jsRender/jsrender-exam.html
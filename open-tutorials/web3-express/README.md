[WEB3 Express - 생활코딩](https://opentutorials.org/module/3590)

# Express 설치
- `npm install express --save`
- Hello World!
    ```js
    const express = require('express')
    const app = express()
    const port = 3000
    
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
    ```
  
# 기본 라우팅
```js
app.METHOD(PATH, HANDLER)
```
- 위에서부터 아래로 읽어드리면서 만족되는 path가 만족되면 실행된다. (JS는 흐름을 잘 봐야하는구나!)

- GET 방식으로 온 '/' 요청 다루기
  ```js
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  ```

- :id로 들어온 path parameter 사용하기
  ```js
  app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
  })
  ```

# express.Router
- express.Router 클래스를 사용하면 모듈식 마운팅 가능한 핸들러를 작성할 수 있다.

1. 별도의 파일의 연관된 라우터 선언
  ```js
  var express = require('express');
  var router = express.Router();
  
  // middleware that is specific to this router
  router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  router.get('/', function(req, res) {
    res.send('Birds home page');
  });
  // define the about route
  router.get('/about', function(req, res) {
    res.send('About birds');
  });
  
  module.exports = router;
  ```
  - 상단에 express객체와 router객체 선언,
  - module.exports로 설정한 router 반환

2. 앱에서 라우터 사용하기
  ```js
  var birds = require('./birds');
  ...
  app.use('/birds', birds);
  ```
  
# 미들웨어
- 미들웨어가 뭐야?
> 미들웨어 함수는 요청 오브젝트(req), 응답 오브젝트 (res), 그리고 애플리케이션의 요청-응답 주기 중 그 다음의 미들웨어 함수 대한 액세스 권한을 갖는 함수입니다.

- http://expressjs.com/ko/guide/writing-middleware.html

- 미들웨어가 동작하는 원리
```js
var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.listen(3000);
```
- `app.use`를 통해서 미들웨어를 사용하도록 하고 중간에 삽입된 미들웨어의 기능이 라우팅에 영향을 미치게 되었다. (위에 예제에서는 requestTime이 삽입됨)
- `app.use`는 모든 라우터에게 영향을 주기 때문에, `app.get('*', handler)`와 같은 형태를 사용하면 get요청의 모든 path로 지정할 수 있다.
- 미들웨어의 인자로 받은 next는 다음 미들웨어 함수를 말한다.

## 미들웨어가 실행되는 순서
- 미들웨어와 라우터들은 기본적으로 위에서 아래로 순차적으로 실행된다. next()라는 콜백을 호출하여서 다음 미들웨어의 실행을 할 수도 있고 안 할 수 도 있다.
- 미들웨어가 실행되는 순서를 잘 파악하고 알고있어야 애플리케이션의 흐름을 알수 있다.
- 공식문서가 짱좋네
- http://expressjs.com/ko/guide/using-middleware.html

## 미들웨어 body-parser 사용하기 (미들웨어 예제)
1. body-parser 설치
  ```shell
  npm install body-parser --save
  ```
2. body-parser 사용하기
  ```js 
  var bodyParser = require('body-parser')
  
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  
  // POST /login gets urlencoded bodies
  app.post('/login', function (req, res) {
    res.send('welcome, ' + req.body.username) //req.body를 바로 사용가능!
  })
  ```

# 정적파일 제공하기
- 내장 미들웨어를 사용하여 'pulbic' 하위 디렉토리를 정적파일 루트로 설정하기
  ```js
  app.use(express.static('public'));
  ```
- http://expressjs.com/ko/starter/static-files.html

# 오류처리
- http://expressjs.com/ko/guide/error-handling.html

# 보안
- http://expressjs.com/ko/advanced/best-practice-security.html

# Express generator
- 기본적인 설정을 기반으로 하여 express 프로젝트 만들기
- http://expressjs.com/ko/starter/generator.html

0. express generator 설치 `npm install express-generator -g` -g 옵션을 사용하여서 컴퓨터 전역적으로 사용가능하도록 설정
1. express project(package) 생성 `express myapp`
2. `cd myapp` `npm install` 초기 설정 npm install로 pacakage.json의 dependency에 있는 모듈들 다운로드

# 수업을 마치며
- 템플릿 엔진과 db
- 쿠키, 세션, 회원, 인증, oAuth.. 이런 토픽은 필요할 때 보자! (인프런에 다 모여있음, 생활코딩은 다른 토픽으로 분리되어 있음)

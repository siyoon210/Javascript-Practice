[WEB2 Node.JS - 생활코딩](https://opentutorials.org/module/3549)

# Node.JS
- 웹 브라우저에서 DOM을 조작하기 위해서 만들어진 JS라는 언어를 브라우저가 아닌 곳에서도 사용할 수 있도록 하는 플랫폼 소프트웨어

# Node.js 설치
- `node -v` 명령어로 버전이 뜬다면 설치 확인
- 터미널에서 `node helloworld.js`와 같은 명령어로 JS파일을 실행시킬 수 있게 된다!

# Node.js - 웹서버 만들기
- Node.js는 웹서버 기능을 가지고 있다.
    ```js
    var http = require('http');
    var fs = require('fs');
    var app = http.createServer(function(request,response){
        var url = request.url;
        if(request.url == '/'){
          url = '/index.html';
        }
        if(request.url == '/favicon.ico'){
          return response.writeHead(404);
        }
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + url));
     
    });
    app.listen(3000);
    ```
- `node main.js`와 같이 실행시키면 `app.listen()`에 명시된 3000번 포트로 접속할 수있다.

# JavaScript의 기본문법 & Node.js의 주요 기능 & 웹앱
## Template Literal
- 문자열 합성방식 `Hello ${name}` 백틱안에서 ${}를 사용하면 JS코드를 사용가능하다. 즉 `${1+1}`과 같은 것도  가능!

## node.js의 url 모듈을 사용하여 query string 파싱하기
1. url 모듈 주입받기
  ```js
  var url = require('url');
  ```

2. url 모듈로 쿼리스트링 파싱하기
  ```js
  var queryData = url.parse("/?id=html", true).query;
  queryData.id; // 쿼리스트링에서 id라는 값 사용
  ```

## node.js에서 파일읽기 (file system read)
- 공식문서 https://nodejs.org/dist/latest-v14.x/docs/api/
  ```js
  var fs = require('fs');
  fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
  });
  ```
  
## Node.js - 콘솔에서의 입력값
- 콘솔로 node 실행시에 `node 실행파일.js arg1 arg2 ...` 실행파일 뒤에 공백으로 구분된 입력값을 넣을 수 있다.
  ```js
  var args = process.argv;
  ```
- args는 배열인데, 0번째 인덱스에는 node runtime 경로, 1번째 인덱스에는 실행파일 경로, 2번째 인덱스는 입력한 인자(arg1)이 나온다.
  - ex) `node fileread.js siyoon jung`
    ```text
    [ '/usr/local/bin/node',
    '/Users/jeongsiyun/workspace/siyoon210/HTML-CSS-JS/open-tutorials/web2-nodejs/fs-sample/fileread.js',
    'siyoon',
    'jung' ]
    ```

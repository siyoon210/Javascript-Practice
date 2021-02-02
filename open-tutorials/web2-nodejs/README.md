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

## node.js에서 파일다루기 (fs: file system)
- 공식문서 https://nodejs.org/dist/latest-v14.x/docs/api/
- 파일읽기
  ```js
  var fs = require('fs');
  fs.readFile('sample.txt', 'utf8', function(err, data){
    console.log(data);
  });
  ```
- 디렉토리 리스트 읽어오기
  ```js
  var fs = require('fs');
   
  fs.readdir('./data', function(error, filelist){
    console.log(filelist);
  })
  ```
- 파일 쓰기
  ```js
  fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.writeHead(302, {Location: `/?id=${title}`});
      response.end();
  })
  ```
- 파일 이름바꾸기, 파일 삭제하기 ... 공식문서 참고
  
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

## 패키지 매니저와 PM2
- 패키지 매니저는 의존성을 관리해준다.
- NPM은 node.js의 대표적인 패키지 매니저 (비슷한 yarn도 있지~)
- PM2는 코드의 변경을 감지하고 리로딩 해주거나, 프로그램 실행에 전반적인 도움을 주는 프로그램
  - 설치 `sudo npm install pm2 -g` -g는 해당 프로그램은 독립적으로 시스템 어디에서나 사용하겠다는 뜻
  - 프로그램 실행 `pm2 start 실행파일.js --watch`
  - data 하위 폴더가 바뀌더라도 리로드 하지 않기 `pm2 start main.js --watch --ignore-watch="data/*"` 
  - 프로그램 종료 `pm2 stop 'name'`
  - 로그 출력 `pm2 log`
  
## Node.js에서 post 데이터 다루기

```js
var qs = require('querystring');

var body = '';

//data를 읽어드려야 하는 경우
request.on('data', function (data) {
  body = body + data;
});

//data를 모두 읽어드린 경우 실행
request.on('end', function () {
  var post = qs.parse(body);
  var title = post.title;
  var description = post.description
});
```

## Node.js 리다이렉트
`response.writeHead(302, {Location: `/...`});`

## Node.js의 모듈 형식
1. `module.exports` 에 외부에서 사용되기 원하는 객체를 할당한다.
  ```js
  module.exports = { ... }
  ```
2. `require`로 불러온다.
  ```js
  var myModule = require('./lib/my-module.js');
  ```
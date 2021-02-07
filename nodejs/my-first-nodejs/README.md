# nodejs (express) 연습용 프로젝트
- 목표:  nodejs(express)기반으로 CRUD를 구현한다. DB를 사용한다.

# 진행기록
## 1. Hello world
1. npm init
2. npm install express --save
3. Hello world
    ```js
    const express = require('express');
    const app = express();
    const port = 3000;
    
    app.get("/", ((req, res) => {
    res.send("Hello world");
    }))
    
    app.listen(port, () => {
    console.log('my-first-nodejs app listening at http://localhost:3000')
    })
    ```
## 2. pug 적용
1. npm install pug --save
2. 렌더링 엔진으로 pug 설정
   ```js
   app.set("view engine", "pug");
   ```
3. pug 파일로 렌더링하기
   ```js
   app.get("/", ((req, res) => {
     res.render("index.pug");
   }))
   ```

## 3. MongoDB 적용하기
1. MongoDB 설치
   1. brew tap mongodb/brew
   2. brew install mongodb-community@4.4
      - 바로 실행이 안되어서 아래 명령어 실행 후에 하니까 됨
      1. sudo chown -R $(whoami) /usr/local/share/man/man5 /usr/local/share/man/man7
      2. chmod u+w /usr/local/share/man/man5 /usr/local/share/man/man7
   - `mongo`로 설치확인
   - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
   
2. Mongoose 설치
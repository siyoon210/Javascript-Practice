# nodejs (express) 연습용 프로젝트
- 목표:  nodejs(express)기반으로 CRUD를 구현한다. DB를 사용한다.

# 진행기록
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
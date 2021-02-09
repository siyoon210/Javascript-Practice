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

## 3. MariaDB 적용
- https://www.npmjs.com/package/mariadb
1. npm install --save mariadb (--save, -S는 package.json의 dependencies에 명시됨)
2. mariadb sample
   ```js
   const mariadb = require('mariadb');
   const pool = mariadb.createPool({
      host: 'localhost',
      user: 'user',
      password: 'password',
      database: 'my_database_name',
      connectionLimit: 5
   });
   
   async function asyncFunction() {
      let conn;
      try {
         conn = await pool.getConnection();
         const rows = await conn.query("SHOW TABLES");
         console.log(rows);
      } catch (err) {
         throw err;
      } finally {
         if (conn) conn.release(); //release to pool
      }
   }
   
   asyncFunction();
   ```

### MariaDB 테이블 생성
- https://opentutorials.org/course/3347
1. mysql -uroot -p 로 접속
2. CREATE DATABASE my_first_nodejs; (-는 못들어가는구나..)
3. SHOW DATABASES; 로 생성확인
4. USE my_first_nodejs;
5. Table & 샘플 데이터 생성
   ```shell 
   --
   -- Table structure for table `author`
   --
     
     
   CREATE TABLE `author` (
     `id` int(11) NOT NULL AUTO_INCREMENT,
     `name` varchar(20) NOT NULL,
     `profile` varchar(200) DEFAULT NULL,
     PRIMARY KEY (`id`)
   );
     
   --
   -- Dumping data for table `author`
   --
     
   INSERT INTO `author` VALUES (1,'egoing','developer');
   INSERT INTO `author` VALUES (2,'duru','database administrator');
   INSERT INTO `author` VALUES (3,'taeho','data scientist, developer');
     
   --
   -- Table structure for table `topic`
   --
     
   CREATE TABLE `topic` (
     `id` int(11) NOT NULL AUTO_INCREMENT,
     `title` varchar(30) NOT NULL,
     `description` text,
     `created` datetime NOT NULL,
     `author_id` int(11) DEFAULT NULL,
     PRIMARY KEY (`id`)
   );
     
   --
   -- Dumping data for table `topic`
   --
     
   INSERT INTO `topic` VALUES (1,'MySQL','MySQL is...','2018-01-01 12:10:11',1);
   INSERT INTO `topic` VALUES (2,'Oracle','Oracle is ...','2018-01-03 13:01:10',1);
   INSERT INTO `topic` VALUES (3,'SQL Server','SQL Server is ...','2018-01-20 11:01:10',2);
   INSERT INTO `topic` VALUES (4,'PostgreSQL','PostgreSQL is ...','2018-01-23 01:03:03',3);
   INSERT INTO `topic` VALUES (5,'MongoDB','MongoDB is ...','2018-01-30 12:31:03',1)
   ```
   
## 4. body-parser 미들웨어사용
```shell
npm i body-parse --save
```

```js
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/topics", (req, res) => {
   req.body.title
   req.body.description
})
```

## 5. 리다이렉트
```js
res.redirect(`/topic/${id}`);
```
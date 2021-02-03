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
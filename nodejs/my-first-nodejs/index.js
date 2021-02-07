const express = require('express');
const app = express();
const port = 3000;
const mariadb = require('mariadb');
const dbConfig = require('./config/db-config.json')
const pool = mariadb.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    connectionLimit: dbConfig.connectionLimit
});

async function useMariaDB() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM TOPIC");
        console.log(rows);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.release(); //release to pool
    }
}

app.set("view engine", "pug");

app.get("/", (async (req, res) => {
    const result = await useMariaDB();
    res.send(result);
}))

app.listen(port, () => {
    console.log('my-first-nodejs app listening at http://localhost:3000')
})
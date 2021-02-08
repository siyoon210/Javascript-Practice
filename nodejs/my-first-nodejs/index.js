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

async function executeQuery(sql, values) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(sql, values);
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
    const topics = await executeQuery(`SELECT id, title FROM topic`);
    res.render('index.pug', {topics})
}))

app.get("/topics/:id", async (req, res) => {
    const topics = await executeQuery(`SELECT id, title FROM topic`);
    const id = req.params.id;
    const sql = `SELECT t.id, t.title, t.description, t.created, t.author_id, a.name, a.profile FROM topic AS t JOIN author AS a ON t.author_id = a.id WHERE t.id = ?`
    const topic = await executeQuery(sql, [id]);
    res.render('topic.pug', {topics, topic: topic[0]})
})

app.listen(port, () => {
    console.log('my-first-nodejs app listening at http://localhost:3000')
})
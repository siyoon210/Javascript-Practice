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
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

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

const getTopics = async function (req, res, next) {
    const topics = await executeQuery(`SELECT id, title FROM topic`);
    req.options = {topics}
    next();
};

app.use(getTopics);

app.set("view engine", "pug");

app.get("/", (async (req, res) => {
    res.render('index.pug', req.options)
}))

app.get("/topics/edit", async (req, res) => {
    res.render('edit.pug', req.options)
})

app.post("/topics", async (req, res) => {
    const sql = `INSERT INTO topic(title, description, created) VALUES (?, ?, now())`
    await executeQuery(sql, [req.body.title, req.body.description])
    res.redirect("/")
})

app.get("/topics/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT t.id, t.title, t.description, t.created, t.author_id, a.name, a.profile 
    FROM topic AS t 
    LEFT JOIN author AS a 
    ON t.author_id = a.id 
    WHERE t.id = ?`
    const topic = await executeQuery(sql, [id])
    req.options.topic = topic[0]
    res.render('topic.pug', req.options)
})

app.listen(port, () => {
    console.log('my-first-nodejs app listening at http://localhost:3000')
})
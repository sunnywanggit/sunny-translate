// app.js
const http = require('http'); // 引入http模块
const mysql = require('mysql'); // 引入mysql模块

let connection = mysql.createConnection({ // 创建mysql实例
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'mytest1'
})

connection.connect();

let sql = 'select * from user'; // 查询语句
let str = '';
connection.query(sql, (err, result) => {
    if (err) {
        console.log('[select error]:', err.message);
        return;
    }
    str = JSON.stringify(result);
    console.log(str); // 数据库查询结果返回到result中
})

const server = http.createServer((req, res) => { // 创建http服务器
    res.end(str); // 发送响应数据
})

connection.end();

server.listen(3000, () => { // listen方法监听3000端口
    console.log('服务启动成功 http://localhost:3000');
})

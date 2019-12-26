const mysql = require('mysql');
const redis = require('redis');

const connection = mysql.createConnection({
    host: '192.168.1.143',
    user: 'root',
    password: '849072',
    database: 'koa_blog'
})
const client = redis.createClient({
    host: '192.168.1.143',
})
const http = require('http')
http.createServer((req,res) => {
    client.get('users',(err,replay) => {
        if(replay) {
            console.log('from redis') // 从缓存里面取
            res.end(replay)
        } else {
            // 数据库
            connection.query('select * from users',(err,result) => {
                if(err) console.log(err)
                client.set('users',JSON.stringify(result))
                res.end(JSON.stringify(result))
            })
        }
    })
    
})
.listen(9090, () => {
    console.log(9090)
})
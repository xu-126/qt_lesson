import 'reflect-metadata'
import Koa = require('koa')
import { useControllers } from 'koa-controllers'; // koa 的控制器

const app = new Koa()
useControllers(app,__dirname + '/controllers/*.ts',{
    multipart: {
        dest: './uploads'
    }
})

app.listen(3000)
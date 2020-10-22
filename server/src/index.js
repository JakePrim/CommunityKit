const Koa = require('koa');
const Router = require('koa-router');//请求方式
const koaBody = require('koa-body');//post 文件上传的处理等
const cors = require('@koa/cors');//处理跨域的请求
const json = require('koa-json');//格式化json字符串

const app = new Koa();
const router = new Router();

router.prefix('/api');//所有接口的前缀

router.get('/',ctx=>{
    ctx.body = 'hello world'
});

router.post('/user',ctx=>{
    const params = ctx.request;
    console.log(params);
    ctx.body={

    }
});

app.use(koaBody());//1. 处理request请求过来的数据
app.use(cors());//2. 处理跨域的请求
app.use(json())
app.use(router.routes())
    .use(router.allowedMethods());//3. 请求路由

app.listen(3110);
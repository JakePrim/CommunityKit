import Koa from 'koa';
import router from './routes/routes';//请求方式
import koaBody from 'koa-body';//post 文件上传的处理等
import cors from '@koa/cors';//处理跨域的请求
import json from 'koa-json';//格式化json字符串
import helmet from 'koa-helmet';//安全的请求头
import statics from 'koa-static';//静态资源
import path from 'path';
import compose from 'koa-compose';//整合中间件
import compress from 'koa-compress';//压缩中间件

const isDevMode = (process.env.NODE_ENV === 'production' ? false : true)

const app = new Koa();
// app.use(koaBody());//1. 处理request请求过来的数据
// app.use(cors());//2. 处理跨域的请求
// app.use(json({pretty:false,param:'pretty'}));//json格式化
// app.use(helmet());//安全的请求头
// app.use(statics(path.join(__dirname,'../public')));
// app.use(router());//3. 请求路由
/**
 * compose 集成中间件
 */
const middleware = compose([
    koaBody(),
    statics(path.join(__dirname,'../public')),
    cors(),
    json({pretty:false,param:'pretty'}),
    helmet(),
    statics(path.join(__dirname,'../public'))
]);

if(!isDevMode){//生产模式压缩中间件
    app.use(compress());
}



app.use(middleware);
app.use(router());

app.listen(3110,()=>{
    console.log(`服务已经启动,当前所属环境:${process.env.NODE_ENV} http://localhost:3110`);
});

//npm-check-updates
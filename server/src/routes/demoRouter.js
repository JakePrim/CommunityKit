import Router from 'koa-router';

import demoController from '../api/demoController';

const router = new Router();

// router.prefix('/api');//所有接口的前缀

router.get("/a", demoController.demo);

router.get('/',ctx=>{
    console.log(ctx.request.query);
    ctx.body = 'hello world'
});

router.post('/user',ctx=>{
    const params = ctx.request;
    console.log(params);
    ctx.body={

    }
});


export default router
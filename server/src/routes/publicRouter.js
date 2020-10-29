import Router from 'koa-router';

import publicController from '../api/PublicController';

const router = new Router();

router.get("/getCaptcha", publicController.getCaptcha);

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
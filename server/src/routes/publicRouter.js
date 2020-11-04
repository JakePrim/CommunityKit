import Router from 'koa-router';

import publicController from '../api/PublicController';

const router = new Router();

router.get("/getCaptcha", publicController.getCaptcha);

router.get('/',ctx=>{
    console.log(ctx.request.query);
    ctx.body = 'hello world'
});


export default router

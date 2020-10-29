import combineRoutes from 'koa-combine-routers';

import demoRouter from './publicRouter';

const router = combineRoutes(demoRouter);

export default router;
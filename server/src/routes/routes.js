import combineRoutes from 'koa-combine-routers';

import demoRouter from './demoRouter';

const router = combineRoutes(demoRouter);

export default router;
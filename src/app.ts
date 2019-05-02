import * as Koa from 'koa';
import * as Router from 'koa-router';

const koa = new Koa();
const router = new Router();

router.get('/', async ctx => {
    ctx.body = 'Hello world';
});

koa.use(router.routes());
koa.listen(3003);

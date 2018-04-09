import base from '../app/base/router'
const router = require('koa-router')();

router.use('/test', base.routes(), base.allowedMethods());

export {
    router,
}
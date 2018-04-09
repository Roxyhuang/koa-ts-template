import { SessionController } from './controller';
const router = require('koa-router')();

export default router
    .get('/a',SessionController.session )
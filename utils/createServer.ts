import * as Koa from 'koa'
import * as kcors from 'kcors'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import { router } from './createRouter'


export default async(): Promise<any> => {
    const app = new Koa();

    app.use(kcors());

    app.use(bodyParser());

    app.use(router.routes()).use(router.allowedMethods());

    return app
}
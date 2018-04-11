import * as Koa from 'koa';
import * as kcors from 'kcors';
import * as bodyParser from 'koa-bodyparser';
import * as config from 'config';
import { router } from './createRouter';

const log4js = require('log4js');


export default async(): Promise<any> => {
    const env = config.get('env');

    console.log(env);

    console.log(log4js);

    const app = new Koa();

    app.use(kcors());

    app.use(bodyParser());

    app.use(router.routes()).use(router.allowedMethods());

    return app
}
import { Context } from 'koa'
// import { SessionService } from '../services'
// import { Session } from '../models'

export const SessionController = {

    async session(ctx: Context): Promise<void> {
        ctx.body = JSON.stringify({test: 1111});
    },

    async auth(ctx: Context): Promise<void> {
        ctx.badRequest('you have no access to the authority.')
    },


}
import createServer from '../utils/createServer';
import { Server } from 'http'

export = (async() => {
    try {
        const app = await createServer();
        const server: Server = app.listen(5000, () => {
            console.log(5000);
            // console.log(`Server listening on ${Environment.port}, in ${Environment.identity} mode.`)
        })
        return server
    } catch (e) {
        console.log(e);
        process.exit(1)
    }
})();




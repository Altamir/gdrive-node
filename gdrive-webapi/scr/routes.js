import { logger } from "./logger.js"

export default class Routes {
    io

    constructor() { }

    setSocketIO(io) {
        this.io = io
    }

    async defaultRouter(request, response) {
        response.end('Hello Word')
    }

    async options(request, response) {
        response.writeHead(204)
        response.end()
    }

    async post(request, response) {
        logger.info('post ae')
        response.end('Hello Word')
    }

    async get(request, response) {
        logger.info('get ae')
        response.end('Hello Word')
    }

    handler(request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*')
        const chosen = this[request.method.toLowerCase()] || this.defaultRouter
        return chosen.apply(this, [req, response])
    }
};
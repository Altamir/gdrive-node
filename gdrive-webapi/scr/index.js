import fs from 'fs'
import { logger } from './logger.js'
import https from 'https'
import { Server } from 'socket.io'
import Routes from './routes.js'

const PORT = process.env.port || 3000
const localHostssl = {
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem'),
}
const router = new Routes()
const server = https.createServer(
    localHostssl,
    router.handler.bind(router)
)

const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: false,
    }
})
router.setSocketIO(io)

io.on('conection', (socket) => {
    logger.info(`Some conection: ${socket.id}`)
})

const startServer = () => {
    const { address, port } = server.address()
    logger.info(`Server start: htttps:${address}:${port}`)
}

server.listen(PORT, startServer)
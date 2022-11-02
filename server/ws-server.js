/**
 * WebSocket Node示例（使用 ws库）
 */

const { WebSocketServer } = new require('ws');

const server = new WebSocketServer({ port: 8080 })

server.on('connection', (ws) => {
    console.log('server connection: ', ws)
    ws.on('message', (data, isBinary) => {
        console.log('server receive message')
        console.log('isBinary: ', isBinary)
        console.log('byteLength: ', data.byteLength)
        ws.send('我收到消息啦')
    })
    ws.on('error', (e) => {
        console.error('server connect error: ', e)
    })
    ws.on('close', () => {
        console.warn('server connect closed')
    })
})
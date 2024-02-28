import http from 'http'
import { Server } from 'socket.io'

const server = http.createServer()
const io = new Server(server, {
  cors: {
    origin: [
      'https://radiooooo.com',
      'https://beta.radiooooo.com',
      'https://radioo.ooo',
      'http://localhost:3000'
    ],
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  console.log('Radiooooo client connected')

  socket.on('playing', (data) => {
    console.log('Playing:', data)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected')
  })
})

server.listen(9996, () => {
  console.log('Server listening on *:9996')
})

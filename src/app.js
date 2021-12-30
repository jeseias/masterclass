const express = require('express')

const app = express()
const { messageRoutes } = require('./routes/message-routes')

// Middlewares
app.use(express.json())

// Verbos HTTP 
/**
 * GET = busacr informacoes
 * POST = criar informacois
 * PUT / PAfCTH = atualizar informacoes
 * DELETE = eliminar informacoes
 */

app.use('/api', messageRoutes)

app.listen(3000, () => console.log('Servidor esta rodando na porta 3000'))
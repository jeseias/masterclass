const { Router } = require('express')
const { createMessage } = require('../controllers/message-controller')

const messageRoutes = Router()

messageRoutes
  .route('/messages')
  .post(createMessage)
  .get(createMessage)

module.exports = { messageRoutes }




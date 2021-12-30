const createMessage = async (request, response) => {
  return response.send({ body: request.body })
}

const getMessages = async (request, response) => {
  // Buscar dados na BD 
  const messages = []
  return response.json({ body: messages })
} 

module.exports = { createMessage }
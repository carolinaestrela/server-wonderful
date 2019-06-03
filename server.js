const express = require ('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const comidas = {pratosFavoritos: [
  {
    nome: "Batata frita",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/Batata-frita.jpg"
  },
  {
    nome: "Macarronada",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/macarronada.jpg"
  },
  {
    nome: "Falafel",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/falafel.jpg"
  },
  {
    nome: "Creme de abóbora",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/creme-de-abobora.jpg"
  },

]}

const servidor = express()
servidor.use(cors())

servidor.get("/comidas",(request,response)=>{
  response.send(controller.getAll())
})

servidor.post('/comidas',bodyParser.json(),(request, response) =>{
  controller.add(request.body)
  response.send(201)
})

servidor.delete('./comidas/:id', (request, response)=>{

})

servidor.delete('./comidas/:id', (request, response)=>{
  controller.delete(request.params.id)
  response.sendStatus(204)

})
servidor.listen(3000)
console.log("servidor wonderful rodando na porta 3000") 
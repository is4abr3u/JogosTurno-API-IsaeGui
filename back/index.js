import express from "express"
import database from "./config/database.js"
import partidas from './router/partida.js'
import jogo from './router/jogo.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/jogo/partidas', partidas)
app.use('/api/v1/jogo/jogo', jogo)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log((e))
    })
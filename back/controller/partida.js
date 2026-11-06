import ServicePartida from '../service/partida.js'

class ControllerPartida {

    async Buscar(_, res) {
        try {
            const partidas = await ServicePartida.Buscar()

            res.status(200).send({ partidas })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(_, res) {
        try {
            
            const partida = await ServicePartida.Detalhe(id)

            res.status(200).send({ partida })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { desc, data, vencedor } = req.body

            await ServicePartida.Criar(desc, data, vencedor)

            res.status(201).send({ message: "Registro de partida criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { desc, data, vencedor } = req.body

            await ServicePartida.Alterar(id, desc, data, vencedor)
        
            res.status(200).send({ message: "Registro de partida alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServicePartida.Deletar(id)

            res.status(204).send({ message: "Registro de partida deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default new ControllerPartida()
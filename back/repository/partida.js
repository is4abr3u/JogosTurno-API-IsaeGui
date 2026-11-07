import partida from "../model/partida.js"

class RepositoryJogo {

    async Status() {
        return partida.Status()
    }

    async Detalhe(id) {
        return partida.findByPk(id)
    }

    async Criar(desc, data, vencedor) {
        await partida.create({ desc, data, vencedor })
    }

    async Alterar(id, desc, data, vencedor) {
        const partida = await partida.findByPk(id)
        
        if(!partida) {
            throw new Error("Registro de partida não encontrado")
        }

        partida.desc = desc || partida.desc
        partida.data = data || partida.data
        partida.vencedor = vencedor || partida.vencedor

        await partida.save()
    }

    async Deletar(id) {
        const partida = await partida.findByPk(id)
        
        if(!partida) {
            throw new Error("Registro de partida não encontrado")
        }

        await partida.destroy()
    }

}

export default new RepositoryJogo()
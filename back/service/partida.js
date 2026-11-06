import RepositoryPartida from '../repository/partida.js'

class ServicePartida{

    async Buscar() {
        return RepositoryPartida.Buscar()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryPartida.Detalhe(id)
    }

    async Criar(desc, data, vencedor) {
        if(!desc|| !data || !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }

        await RepositoryPartida.Criar(desc, data, vencedor)
    }

    async Alterar(id, desc, data, vencedor) {
        if(!id ||!desc|| !data || !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }

        await RepositoryPartida.Alterar(id, desc, data, vencedor)
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryPartida.Deletar(id)
    }


}

export default new ServicePartida()
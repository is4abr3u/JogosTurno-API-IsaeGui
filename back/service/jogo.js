import RepositoryJogo from '../repository/jogo.js'

class ServiceJogo{

    async Status() {
            return RepositoryJogo.Status()
        }

    async Ataque() {
            return RepositoryJogo.Ataque()
        }
    
    async Defesa() {
            return RepositoryJogo.Defesa()
        }

    async Cura() {
            return RepositoryJogo.Cura()
        }



}

export default new ServiceJogo()
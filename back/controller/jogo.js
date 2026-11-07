import ServiceJogo from '../service/jogo.js'

class ControllerJogo {

    async Status(_, res) {

            const resultado = await ServiceJogo.Status()

            res.send( resultado )
        
    }
    
    async Ataque(_, res) {

            const resultado = await ServiceJogo.atacar()

            res.send( resultado )
        
    }

    async Defesa(_, res) {

            const resultado = await ServiceJogo.defender()

            res.send( resultado )
        
    }

    async Cura(_, res) {

            const resultado = await ServiceJogo.curar()

            res.send( resultado )
        
    }
}

export default new ControllerJogo()
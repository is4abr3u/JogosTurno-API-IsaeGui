import {campeaoInicial, mostroInicial } from "../model/jogo.js"
//import mostroInicial from "../model/jogo.js"

class RepositoryJogo {

    async Status() {
        return campeaoInicial.Status()
        
    }

     async Status() {
        return mostroInicial.Status()
        
    }
    

     async Ataque() {
        return campeaoInicial.Ataque()
        
    }

     async DanoBase() {
        return mostroInicial.DanoBase()
        
    }

     async Defesa() {
        return campeaoInicial.Defesa()
        
    }

     async Defesa() {
        return mostroInicial.Defesa()

        
    } async Cura() {
        return campeaoInicial.Cura()
        
    }

     async Cura() {
        return mostroInicial.Cura()
        
    }

}

export default new RepositoryJogo()
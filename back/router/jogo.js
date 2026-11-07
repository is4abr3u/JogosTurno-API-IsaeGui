import express from "express"
import ControllerJogo from "../controller/jogo.js"


const router = express.Router()

router.get('/status', ControllerJogo.Status)
router.get('/ataque', ControllerJogo.Ataque)
router.post('/defesa', ControllerJogo.Defesa)
router.put('/curar', ControllerJogo.Cura)

export default router
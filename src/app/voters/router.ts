import * as express from 'express'
import VoterControllers from './controller'
import AuthMiddleware from '../../middlewares/auth'

const router = express.Router()

router.post('/voter', AuthMiddleware.Auth, VoterControllers.create)
router.get('/voters', AuthMiddleware.Auth, VoterControllers.getAll)

export default router
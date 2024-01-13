import * as express from 'express'
import AuthControllers from './controller'
import AuthMiddleware from '../../middlewares/auth'

const router = express.Router()


router.post('/user/register', AuthControllers.register)
router.post('/user/logIn', AuthControllers.logIn)
router.get('/users', AuthControllers.getUser)
router.put('/user/:id', AuthMiddleware.Auth, AuthControllers.update)

export default router
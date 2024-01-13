import * as express from 'express'
import AuthControllers from './controller'
import AuthMiddleware from '../../middlewares/auth'

const router = express.Router()


router.post('/user/register', AuthControllers.register)
router.post('/user/logIn', AuthControllers.logIn)
router.get('/users', AuthControllers.getUser)
router.get('/user/:id', AuthMiddleware.Auth, AuthControllers.getDetail)
router.put('/user/:id', AuthMiddleware.Auth, AuthControllers.update)
router.delete('/user/:id', AuthMiddleware.Auth, AuthControllers.delete)

export default router
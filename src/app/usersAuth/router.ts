import * as express from 'express'
import AuthControllers from './controller'

const router = express.Router()


router.post('/user/register', AuthControllers.register)
router.post('/user/logIn', AuthControllers.logIn)
router.get('/users', AuthControllers.getUser)

export default router
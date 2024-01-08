import * as express from 'express'
import AuthControllers from './controller'

const router = express.Router()


router.post('/user/register', AuthControllers.register)
router.post('/user/logIn', AuthControllers.logIn)

export default router
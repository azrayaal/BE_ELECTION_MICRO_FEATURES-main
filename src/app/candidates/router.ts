import * as express from 'express'
import CandidateControllers from './controller'
import uploadFile from '../../middlewares/uploadFile'
import AuthMiddleware from '../../middlewares/auth'


const router = express.Router()

router.post('/candidate', AuthMiddleware.Auth, uploadFile.upload("image"), CandidateControllers.create)
router.get('/candidate', CandidateControllers.getAll)

export default router
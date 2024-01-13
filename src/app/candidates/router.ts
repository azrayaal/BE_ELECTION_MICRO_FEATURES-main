import * as express from 'express'
import CandidateControllers from './controller'
import uploadFile from '../../middlewares/uploadFile'
import AuthMiddleware from '../../middlewares/auth'


const router = express.Router()

router.post('/candidate', AuthMiddleware.Auth, uploadFile.upload("image"), CandidateControllers.create)
router.get('/candidates', CandidateControllers.getAll)
router.get('/candidate/:id', CandidateControllers.getDetail)
router.put('/candidate/:id', uploadFile.upload("image"), CandidateControllers.update)
router.delete('/candidate/:id', AuthMiddleware.Auth, CandidateControllers.delete)

export default router
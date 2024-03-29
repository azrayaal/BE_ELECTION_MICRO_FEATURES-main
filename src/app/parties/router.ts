import * as express from "express"
import PartyControllers from './controller'
import uploadFile from "../../middlewares/uploadFile"
import AuthMiddleware from "../../middlewares/auth"

const router = express.Router()

router.post('/party', AuthMiddleware.Auth, uploadFile.upload("image"), PartyControllers.create)
router.get('/party', PartyControllers.find)
router.get('/parties', PartyControllers.getAll)
router.get('/party/:id', PartyControllers.getDetail)
router.put('/party/:id', AuthMiddleware.Auth, uploadFile.upload("image"), PartyControllers.update)
router.delete('/party/:id', AuthMiddleware.Auth,  PartyControllers.delete)

export default router
import * as express from "express"
import PartyControllers from './controller'
import uploadFile from "../../middlewares/uploadFile"
import AuthMiddleware from "../../middlewares/auth"

const router = express.Router()

router.post('/party', AuthMiddleware.Auth, uploadFile.upload("image"), PartyControllers.create)
router.get('/party', PartyControllers.find)

export default router
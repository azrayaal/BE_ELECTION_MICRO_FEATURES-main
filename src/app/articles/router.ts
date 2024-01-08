import * as express from "express"
import ArticleControllers from './controller'
import uploadFile from "../../middlewares/uploadFile"
import AuthMiddleware from "../../middlewares/auth"

const router = express.Router()

// router.post('/article',  uploadFile.upload("image"), ArticleControllers.create)
router.post('/article',  AuthMiddleware.Auth, uploadFile.upload("image"), ArticleControllers.create)
router.get('/article',  AuthMiddleware.Auth, ArticleControllers.find)
router.get('/article/:id', ArticleControllers.getDetail)
router.put('/article/:id', AuthMiddleware.Auth, uploadFile.upload("image"), ArticleControllers.update)
router.delete('/article/:id', AuthMiddleware.Auth, ArticleControllers.delete)

export default router
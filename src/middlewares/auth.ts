import {Request, Response, NextFunction} from "express"
import * as jwt from 'jsonwebtoken'

export default new class AuthMiddleware {
    Auth(req: Request, res: Response, next: NextFunction) : Response{
        const authHeader = req.headers.authorization

        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({message: "unathorize"})
        }

        const token = authHeader.split(" ")[1]

        try {
            const loginSession = jwt.verify(token, "secretkey")
            res.locals.loginSession = loginSession

            next()
        } catch (error) {
            return res.status(401).json({message: `token not valid`})
        }
    }
}
import {Request, Response} from "express"
import AuthServices from './service'
import {UserScheme, LoginScheme} from "./validator"
// import LoginScheme from "./validatorLogin"

export default new class AuthControllers {
    
    async register(req: Request, res:Response){
        try {
            const data = req.body

            console.log(data)

            const {error, value} = UserScheme.validate(data)
            if(error){
                res.status(400).json(error.details[0].message)
            }
            const response = await AuthServices.register(value)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async logIn(req: Request, res: Response){
        try {
            const data = req.body

            const {error, value} = LoginScheme.validate(data)
            if(error){
                res.status(400).json(error.details[0].message)
            }

            const response = await AuthServices.login(value)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

}
import {Request, Response} from "express"
import AuthServices from './service'
import {UserScheme, LoginScheme, UpdateUserScheme} from "./validator"
// import LoginScheme from "./validatorLogin"

export default new class AuthControllers {
    
    async register(req: Request, res:Response){
        try {
            const data = req.body

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

    async getUser(req: Request, res: Response){
        try {

            const users = await AuthServices.getAll()

            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getDetail(req: Request, res: Response){
        try {
            const {id} = req.params

            const detail = await AuthServices.getDetail(id)

            res.status(200).json(detail)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async update(req: Request, res: Response){
        try {
            const {id} = req.params
            const data = {
                id,
                fullName: req.body.fullName,
                password: req.body.password,
                address: req.body.address,
                gender: req.body.gender
            }

            const {error, value} = UpdateUserScheme.validate(data)
            if(error){
                return res.status(400).json(error.details[0].message)
            }

            const updateUser = await AuthServices.update(value)

            res.status(200).json(updateUser)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async delete(req: Request, res: Response){
        try {
            const {id} = req.params
            const deleteUser = await AuthServices.delete(id)

            res.status(200).json(deleteUser)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

}
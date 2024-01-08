import {Request, Response} from 'express'
import VoterSchema from './validator'
import VoterServices from './service'
 
export default new class VoterControllers {

    async create(req: Request, res: Response){
        try {
            const data = req.body

            const {error, value} = VoterSchema.validate(data)

            if(error){
                res.status(400).json(error.details[0].message)
            }

            const response = await VoterServices.create(value)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getAll(req: Request, res: Response){
        try {
            const response = await VoterServices.getAll()

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}
import {Request, Response} from "express"
import CandidateScheme from "./validator"
import CandidateServices from './service'
import cloudinary from "../../libs/cloudinary";

export default new class CandidateControllers {
    
    async create(req: Request, res: Response){
        try {
            const data = {
                name: req.body.name,
                image: res.locals.filename, 
                number: req.body.number,
                vision_mission: req.body.vision_mission,
                partyId: req.body.partyId
            };
            // console.log("data candidates", data)

            const {error, value} = CandidateScheme.validate(data)
            if(error){
                res.status(400).json(error.details[0].message)
            }
            cloudinary.upload()
            await cloudinary.destination(value.image)
            // console.log('Request Payload:', value);

            const response = await CandidateServices.create(value)
            
            res.status(200).json(response)
        } catch (error) {
            res.status(200).json({message: error.message})
        }
    }

    async getAll(req: Request, res: Response){
        try {
            const response = await CandidateServices.getAll()

            // console.log(response)

            res.status(200).json(response)
        } catch (error) {
            res.status(200).json({message: error.message})
        }
    }
}
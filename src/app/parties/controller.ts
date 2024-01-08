import {Request, Response} from "express"
import PartyServices from "./service"
import PartySchema from "./validator"
import cloudinary from "../../libs/cloudinary"

export default new class PartyControllers {

    async create(req: Request, res: Response) {
        try {

            const data = {
                name: req.body.name,
                image: res.locals.filename, 
                chairman: req.body.chairman,
                vision_mission: req.body.vision_mission,
                address: req.body.address
            }

            const {error, value} = PartySchema.validate(data)
            if(error){
                res.status(400).json(error.details[0].message)
            }

            cloudinary.upload()
            await cloudinary.destination(value.image)
            console.log('Request Payload:', value);

            const response = await PartyServices.create(value)
            
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async find(req: Request, res: Response) {
        try {
            const response = await PartyServices.find()

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}
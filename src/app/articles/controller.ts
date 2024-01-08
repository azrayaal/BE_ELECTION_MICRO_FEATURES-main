import {Request, Response} from "express"
import ArticleServices from "./service"
import {ArticleSchema, UpdateArticleSchema} from "./validator"
import cloudinary from "../../libs/cloudinary"

export default new class ArticleControllers {

    async create(req: Request, res: Response){
        try {
           
            const data = {
                title: req.body.title,
                image: res.locals.filename, 
                date: req.body.date,
                author: req.body.author,
                description: req.body.description
            };
            // console.log(data)

            const {error, value} = ArticleSchema.validate(data)
            if(error){
                return (
                    res.status(400).json(error.details[0].message)
                )
            }

            cloudinary.upload()
            await cloudinary.destination(value.image)
            console.log('Request Payload:', value);
            // console.log('Request cloudinaryRes:', cloudinaryRes);
           
            const response = await ArticleServices.create(value)
            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async find(req: Request, res: Response){
        try {
            const Article = await ArticleServices.find()

            res.status(200).json(Article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getDetail(req: Request, res: Response){
        try {
            const id = req.params.id

            const detail = await ArticleServices.getDetail(id)

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
                title: req.body.title,
                image: res.locals.filename, 
                date: req.body.date,
                author: req.body.author,
                description: req.body.description
            };

            const {error, value} = UpdateArticleSchema.validate(data)
            if(error){
                return (
                    res.status(400).json(error.details[0].message)
                )
            }

            cloudinary.upload()
            await cloudinary.destination(value.image)
            console.log('Request Payload:', value);
            // console.log('Request cloudinaryRes:', cloudinaryRes);
           
            const response = await ArticleServices.update(value)
            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async delete(req: Request, res: Response){
        try {
            const {id} = req.params

            const response = await ArticleServices.delete(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}
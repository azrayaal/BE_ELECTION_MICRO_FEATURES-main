import { Repository } from "typeorm";
import { Article } from "../../entities/Article";
import { AppDataSource } from "../../data-source";

export default new class NewsServices {
    private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article)

    async create(data: any) : Promise<object | string> {
        try {
            // console.log('Data received in create:', data);
            
            const response = await this.ArticleRepository.save(data)
            return {
                message: "Success, news has been added!",
                data: response
            }
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async find() : Promise<object | string> {
        try {
           const article = await this.ArticleRepository.createQueryBuilder('article')
           .select(['article.id', 'article.title', 'article.date', 'article.author'])
           .getMany();

           return article
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async getDetail(id: any) : Promise<object |string> {
        try {
            const detail = await this.ArticleRepository.findOne({ where: { id } })
            return detail
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async update(data: any) : Promise<object | string>{
        try {

            const {id, title, image, date, author, description} = data

            const existingArticle = await this.ArticleRepository.findOne({where: {id}})

            if (!existingArticle) {
                return {
                  message: `Article with id ${id} not found.`,
                };
              }

                existingArticle.title = title;
                existingArticle.image = image;
                existingArticle.date = date;
                existingArticle.author = author;
                existingArticle.description = description;

            //   const obj = this.ArticleRepository.create({
            //     title: existingArticle.title,
            //     image: existingArticle.image,
            //     date: existingArticle.date,
            //     author: existingArticle.author,
            //     description: existingArticle.description,
            // })

            const updatedArticle = await this.ArticleRepository.save(existingArticle)

            return {
                message: 'Article updated successfully.',
                data: updatedArticle,
              };
        } catch (error) {
            return {
                message: `Ooops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async delete(id: any) : Promise<object | string> {
        try {

            const checkId = await this.ArticleRepository.findOne({where:  { id }})
            if(!checkId){
                return `there is no id ${id}`
            }

            await this.ArticleRepository.delete(checkId)

            return{
                message: `Artcile has been deleted`
            }
        } catch (error) {
            return{
                message: `Ooops something went error during deleting, please see this ==>> ${error}`
            }
        }
    }
}
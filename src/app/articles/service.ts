import { Repository } from "typeorm";
import { Article } from "../../entities/Article";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";

export default new class NewsServices {
    private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article)
    private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)

    async create(data: any) : Promise<object | string> {
        try {

            const userId = data.userId;

            const user = await this.UserRepository.findOne({ where: { id: userId } })

            const newArticle = this.ArticleRepository.create({ ...data, users: user});
            const response = await this.ArticleRepository.save(newArticle)

            return {
                message: "Success, new Article has been added!",
                data: response,
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
           .leftJoinAndSelect('article.users', 'user')
           .select(['article.id', 'article.title', 'article.date', 'article.author', 
           'article.description', 'user.id', 'user.fullName'])
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

            const checkId = await this.ArticleRepository.findOne({where: {id}})
            if(!checkId){
                return{
                    message: `Article with id: ${id} doesn't exist`
                }
            }

            const articleDetail = await this.ArticleRepository.createQueryBuilder('article')
            .leftJoinAndSelect('article.users', 'user')
            .select(['article.id', 'article.title', 'article.date', 'article.author', 
            'article.description', 'user.id', 'user.fullName'])
            .where('article.id = :id', {id})
            .getOne()

            return articleDetail
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async update(data: any) : Promise<object | string>{
        try {

            const {id, title, image, date, author, description, userId} = data

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
                existingArticle.users = userId
                

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

            await this.ArticleRepository.delete(id)

            return{
                message: `Article has been deleted`
            }
        } catch (error) {
            return{
                message: `Ooops something went error during deleting, please see this ==>> ${error}`
            }
        }
    }
}
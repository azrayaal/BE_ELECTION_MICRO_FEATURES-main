import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'


export default new class AuthServices{
    private readonly AuthRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(data: any) : Promise<object | string>{
        try {
            const checkEmail = await this.AuthRepository.count({where: {email: data.email}})
            if(checkEmail > 0){
                return `${data.email} has been registred!`
            }

            const hashPasword = await bcrypt.hash(data.password, 10)

            const obj = this.AuthRepository.create({
                fullName: data.fullName,
                email: data.email,
                password: hashPasword,
                address: data.address,
                gender: data.gender,
                userName: data.userName
            })
            // console.log(obj)

            const response = await this.AuthRepository.save(obj)

            return{
                message: `Success, ${data.email} has been registered!"`,
                data: response
            }

            
        } catch (error) {
            return {
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async login(data: any) : Promise<object | string>{
        try {

            const checkEmail = await this.AuthRepository.findOne({ where: {email: data.email}})
            if(!checkEmail){
                return `${data.email} has not been registered!`
            }

            const comparePassword = await bcrypt.compare(data.password, checkEmail.password)
            if(!comparePassword){
                return `Password is wrong!`
            }

            const obj = this.AuthRepository.create({
                id: checkEmail.id,
                fullName: checkEmail.fullName,
                email: checkEmail.email,
            })

            const token = jwt.sign({obj}, "secretkey", {expiresIn: "1h"})
            return {
                message: `Login Success!`,
                token
            }
        } catch (error) {
            return{
                message: `Oops something went error, please see this ==>> ${error}`
            }
        }
    }

    async getAll() :Promise<object | string>{
        try {

            const data = await this.AuthRepository.createQueryBuilder('user')
            .leftJoinAndSelect("user.article", "article")
            .leftJoinAndSelect("user.vote", "vote")
            .getMany()

            return data
            
        } catch (error) {
            return{
                message: `Ooops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async getDetail(id: any): Promise<object | string>{
        try {
            const data = await this.AuthRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.article', 'article')
            .leftJoinAndSelect('user.vote', 'vote')
            .select(['user.id', 'user.fullName', 'user.email', 'user.gender', 'user.userName', 
            'vote.id', 
            'article.id', 'article.title', 'article.description', 'article.date', 'article.image'])
            .where('user.id = :id', {id})
            .getOne()

            return data
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }

    async update(data: any): Promise<object | string>{
        try {
            const {id, fullName, password, address, gender} = data
            const checkId = await this.AuthRepository.findOne({where: {id}})
            if(!checkId){
                return{
                    message: `User with id: ${id} doesn't exist`
                }
            }

            const hashPasword = await bcrypt.hash(password, 10)

            const existingUser = await this.AuthRepository.findOne({where: {id}})

            existingUser.fullName = fullName
            existingUser.password = hashPasword
            existingUser.address = address
            existingUser.gender = gender

            const updateUser = await this.AuthRepository.save(existingUser)

            return{
                message: `User has been updated`,
                data: updateUser
            }

        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }

    async delete(id: any): Promise<object | string>{
        try {
            const checkId = await this.AuthRepository.findOne({where: {id}})
            if(!checkId){
                return{
                    message: `User with id: ${id} doesn't exist`
                }
            }
            
            await this.AuthRepository.delete(id)

            return{
                message: `User has been removed`
            }
        } catch (error) {
            return{
                message: `Ooops something went wrong, please see this ==> ${error}`
            }
        }
    }
    

}
import { Repository } from "typeorm";
import { Party } from "../../entities/Party";
import { AppDataSource } from "../../data-source";

export default new class PartyServices {
    private readonly PartyRepository: Repository<Party> = AppDataSource.getRepository(Party)

    async create(data: any) : Promise<object | string>{
        try {
            const response = await this.PartyRepository.save(data)
            return{
                message: "Success, new Party has been added!",
                data: response
            }
        } catch (error) {
            return {
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }

    async find() : Promise<object | string> {
        try {
            //

           const party = await this.PartyRepository.createQueryBuilder('party').getMany()
            
           return party
        } catch (error) {
            return {
                message: `Ooops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async getAll(): Promise<object | string>{
        try {
            const party = await this.PartyRepository.createQueryBuilder('party')
            // .leftJoinAndSelect('party.candidate', 'candidate')
            .getRawMany()

            return party
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }
}
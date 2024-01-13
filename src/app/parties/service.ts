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

            const party = await this.PartyRepository.createQueryBuilder("party")
            .leftJoinAndSelect("party.candidates", "candidates")
            .getMany();

            // const party = await this.PartyRepository.createQueryBuilder('party')
            // .leftJoinAndSelect('party.candidate', 'candidate')
            // .getRawMany()

            return party
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }

    async getDetail(id: any): Promise<object | string>{
        try {

            const detail = await this.PartyRepository.createQueryBuilder("party")
            .leftJoinAndSelect("party.candidates", "candidates")
            .where("party.id = :id", { id: id })
            .getOne();

            return detail
            
        } catch (error) {
            return {
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }

    async update(data: any): Promise<object | string>{
        try {
            const {id, name, image, chairman, vision_mission, address} = data

            const existingParty = await this.PartyRepository.findOne({where: {id}})
            if(!existingParty){
                return{
                    message: `Party with id ${id} doesn't exist`
                }
            }
            
            existingParty.name = name
            existingParty.image = image
            existingParty.chairman = chairman
            existingParty.vision_mission = vision_mission
            existingParty.address = address

            const updateParty = await this.PartyRepository.save(existingParty)

            return{
                message: `Party has been updated`,
                data: updateParty
            }

        } catch (error) { 
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }
}
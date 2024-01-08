import { Repository } from "typeorm";
import { Voter } from "../../entities/Voter";
import { AppDataSource } from "../../data-source";

export default new class VoterServices{
    private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)

    async create(data: any): Promise<object | string> {
        try {
            const response = await this.VoterRepository.save(data)

            return {
                message: 'Success, New Voter has been added!',
                data: response
            }
        } catch (error) {
            return {
                message: `Ooops something went error, please see this ${error}`
            }
        }
    }

    async getAll(): Promise<object | string>{
        try {

            const voter = await this.VoterRepository.createQueryBuilder('voter').getMany()

            return voter
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }
}

// CANDIDATE JOIN KE PARTY

// VOTER JOIN KE CANDIDATE

// USER / VOTER??

// VOTER adalah kumpulan data dr USER
// VOTER 
// name (user)
// address (user)
// gender (user)
// name_candidate (candidate)
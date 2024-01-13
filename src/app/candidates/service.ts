import { Repository } from "typeorm";
import { Candidate } from "../../entities/Candidate";
import { AppDataSource } from "../../data-source";
import {Party} from '../../entities/Party'

export default new class CandidateServices {
    private readonly CandidateRepository: Repository<Candidate> = AppDataSource.getRepository(Candidate)
    private readonly PartyRepository: Repository<Party> = AppDataSource.getRepository(Party)

    async create(data: any): Promise<object | string> {
        try {

            const partyId = data.partyId;

            const party = await this.PartyRepository.findOne({ where: { id: partyId } });
    
            const newCandidate = this.CandidateRepository.create({ ...data, party });
            const candidate = await this.CandidateRepository.save(newCandidate);

            return{
                message: "Success, new Candidate has been added!",
                data: candidate
            }
        } catch (error) {
            return {
                message: `Ooops something went error, please see this ${error}`
            }
        }
    }

    async getAll(): Promise<object | string>{
        try {
            const candidate = await this.CandidateRepository.createQueryBuilder('candidate')
            .leftJoinAndSelect('candidate.party', 'party')
            .select(['candidate.id', 'candidate.name', 'candidate.image', 'candidate.vision_mission',
            'party.id as partyId', 'party.name as partyName'])
            .getRawMany()

            return candidate
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }

    async getDetail(id: any): Promise<object | string>{
        try {

            const checkId = await this.CandidateRepository.findOne({where: {id}})

            if (!checkId){
                return{
                    message: `Candidate with id: ${id} doesn't exist`
                }
            }

            const candidateDetail = await this.CandidateRepository.createQueryBuilder('candidate')
            .leftJoinAndSelect('candidate.party', 'party')
            .select(['candidate.id', 'candidate.name', 'candidate.image', 'candidate.vision_mission',
            'party.id', 'party.name', 'party.vision_mission'
            ])
            .where('candidate.id = :id', {id})
            .getOne()

            return candidateDetail
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==> ${error}`
            }
        }
    }

    async updateData(data: any): Promise<object | string>{
        try {

            const {id, name, image, number, vision_mission, partyId} = data

            const existingCandidate = await this.CandidateRepository.findOne({where: {id}})

            if (!existingCandidate){
                return{
                    message: `Candidate with id: ${id}, doesn't exist`
                }
            }

            existingCandidate.name = name
            existingCandidate.image = image
            existingCandidate.number = number
            existingCandidate.vision_mission = vision_mission
            existingCandidate.party = partyId

            const updateCandidate = await this.CandidateRepository.save(existingCandidate)

            return {
                message: 'Candidate updated successfully.',
                data: updateCandidate
              };
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==> ${error}`
            }
        }
    }

    async deleteData(id: any): Promise<object | string>{
        try {

            const checkId = await this.CandidateRepository.findOne({where: {id}})
            if (!checkId){
                return `Candidate with id: ${id} doesn't exist!`
            }
            
            await this.CandidateRepository.delete(id)

            return {
                message: `Candidate has been deleted`
            }
        } catch (error) {
            return{
                message: `Ooops something went wrong, please see this ==>> ${error}`
            }
        }
    }
}
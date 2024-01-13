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
            // const candidateDetail = await this.CandidateRepository.findOne({where: {id}})

            const candidateDetail = await this.CandidateRepository.createQueryBuilder('candidate')
            .leftJoinAndSelect('candidate.party', 'party')
            .select(['candidate.id', 'candidate.name', 'candidate.image', 'candidate.vision_mission',
            'party.id as partyId', 'party.name as partyName'
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
}
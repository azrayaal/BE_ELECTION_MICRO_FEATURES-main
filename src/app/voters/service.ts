import { Repository } from "typeorm";
import { Voter } from "../../entities/Voter";
import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/Candidate";
import { User } from "../../entities/User";

export default new class VoterServices{
    private readonly VoterRepository: Repository<Voter> = AppDataSource.getRepository(Voter)
    private readonly CandidateRepository: Repository<Candidate> = AppDataSource.getRepository(Candidate)
    private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)

    async create(data: any): Promise<object | string> {
        try {

            const candidateId = data.candidateId;
            const userId = data.userId;

            const candidate = await this.CandidateRepository.findOne({ where: { id: candidateId } });
            const user = await this.UserRepository.findOne({ where: { id: userId } });
    
            const newVoter = this.VoterRepository.create({ ...data, candidate, user });
            const voter = await this.VoterRepository.save(newVoter);

            return {
                message: 'Success, New Voter has been added!',
                data: voter
            }
        } catch (error) {
            return {
                message: `Ooops something went error, please see this ${error}`
            }
        }
    }

    async getAll(): Promise<object | string>{
        try {

            const voter = await this.VoterRepository.createQueryBuilder('voter')
            .leftJoinAndSelect('voter.candidate', 'candidate')
            .leftJoinAndSelect('voter.user', 'user')
            .select([
            'candidate.id as candidateId', 'candidate.name as candidateName', 
            'user.id as userId', 'user.fullName as voter', 'user.address as voter_address', 'user.gender as voter_gender'
            ])
            .getRawMany()

            return voter
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }
}

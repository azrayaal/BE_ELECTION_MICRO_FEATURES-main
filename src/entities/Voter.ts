import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Candidate } from "./Candidate";

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Candidate, (candidate) => candidate.vote)
    candidate: Candidate;

    @ManyToOne(() => User, (user) => user.vote)
    user: User;

    // Tambahan field atau relasi lainnya jika diperlukan
}


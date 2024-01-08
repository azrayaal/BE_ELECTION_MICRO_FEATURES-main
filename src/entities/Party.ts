import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Candidate } from "./Candidate";

@Entity()
export class Party {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ nullable: true })
    image: string

    @Column()
    chairman: string

    @Column()
    vision_mission: string

    @Column()
    address: string

    @OneToMany(() => Candidate, candidate => candidate.party)
    candidates: Candidate[];
}
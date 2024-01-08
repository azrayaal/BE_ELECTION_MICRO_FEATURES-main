import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Party } from "./Party";
import { Voter } from "./Voter";

@Entity()
export class Candidate {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ nullable: true })
    image: string

    @Column()
    number: Number

    @Column()
    vision_mission: string

    @ManyToOne(() => Party, party => party.candidates, { nullable: true })
    @JoinColumn({ name: "partyId" })
    party: Party;

    @OneToMany(() => Voter, voter => voter.candidate)
    vote: Voter;
}
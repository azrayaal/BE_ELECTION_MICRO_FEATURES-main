import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm"
import { Article } from "./Article"
import { Voter } from "./Voter"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    address: string

    @Column()
    gender: string

    @Column()
    userName: string

    @Column()
    password: string

    // @ManyToOne(() => Article, article => article.users, { nullable: true })
    // @JoinColumn({ name: "articleId" })
    // article: Article[];

    @OneToMany(() => Article, article => article.users, { nullable: true })
    article: Article[];

    @OneToMany(() => Voter, voter => voter.user, { nullable: true })
    vote: Voter;

}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { User } from "./User"

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ nullable: true})
    image: string

    @Column()
    date: Date

    @Column()
    author: string

    @Column()
    description: string

    @OneToMany(() => User, user => user.article)
    users: User[];

}

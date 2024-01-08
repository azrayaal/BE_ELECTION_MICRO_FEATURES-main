import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm"
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

    // @OneToMany(() => User, user => user.article)
    // users: User[];

    @ManyToOne(() => User, user => user.article, { nullable: true })
    @JoinColumn({ name: "userId" })
    users: User[];

}

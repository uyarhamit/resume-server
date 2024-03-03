import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'experiences' })
export class Experiences {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    experiences_id: number;

    @Column()
    experiences_title: string;
    @Column()
    experiences_location: string;
    @Column()
    experiences_description: string;
    @Column()
    experiences_skills: string;
    @Column()
    experiences_start_date: Date;
    @Column()
    experiences_end_date: Date;
    @Column({ nullable: true })
    created_at: Date;
    @Column({ nullable: true })
    updated_at: Date;
}
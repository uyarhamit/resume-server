import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profiles' })
export class Profiles {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    profiles_id: number
    @Column()
    profiles_avatar: string
    @Column({ nullable: true })
    created_at: Date;
    @Column({ nullable: true })
    updated_at: Date;
}
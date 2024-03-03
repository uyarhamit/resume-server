import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profiles } from "./Profiles";

@Entity({ name: 'users' })
export class Users {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    users_id: number;
    @Column()
    users_name: string;
    @Column({ unique: true })
    users_email: string;
    @Column()
    users_password: string;
    @Column()
    users_phone: string;
    @Column({ default: 0 })
    users_admin: boolean;
    @Column({ default: 0 })
    users_group_id: number;
    @Column({ nullable: true })
    created_at: Date;
    @Column({ nullable: true })
    updated_at: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    last_login: Date;
    
    @OneToOne(() => Profiles)
    @JoinColumn()
    profile: Profiles;
}
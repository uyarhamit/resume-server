import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'settings' })
export class Settings {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    settings_id: number;

    @Column()
    settings_title: string
    @Column()
    settings_description: string
    @Column()
    settings_footerText: string
    @Column()
    settings_fullname: string
    @Column()
    settings_email: string
    @Column()
    settings_phone: string
    @Column()
    settings_jobTitle: string
    @Column()
    settings_resume: string
    @Column()
    settings_skills: string
    @Column()
    settings_links: string
    @Column()
    settings_scripts: string
    @Column({ nullable: true })
    created_at: Date;
    @Column({ nullable: true })
    updated_at: Date;
}
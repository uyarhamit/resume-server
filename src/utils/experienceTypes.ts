export type createExperienceType = {
    experiences_title: string;
    experiences_location: string;
    experiences_description: string;
    experiences_skills: string;
    experiences_start_date: Date;
    experiences_end_date: Date;
}

export type updateExperienceType = {
    experiences_id: number;
    experiences_title: string;
    experiences_location: string;
    experiences_description: string;
    experiences_skills: string;
    experiences_start_date: Date;
    experiences_end_date: Date;
}
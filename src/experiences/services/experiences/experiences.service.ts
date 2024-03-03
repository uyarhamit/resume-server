import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Experiences } from 'src/typeorm/entities/Experiences';
import { createExperienceType, updateExperienceType } from 'src/utils/experienceTypes';
import { Repository } from 'typeorm';

@Injectable()
export class ExperiencesService {

    constructor(@InjectRepository(Experiences) private experienceRepository: Repository<Experiences>) {

    }

    allExperiences() {
        let result;
        try {
            result = this.experienceRepository.find();
        } catch (error) {
            result = error;
        }
        return result;
    }

    findExperience(experiences_id) {
        let result;
        try {
            result = this.experienceRepository.findBy({ experiences_id });
        } catch (error) {
            result = error;
        }
        return result;
    }

    createExperience(experienceDetail: createExperienceType) {
        let result;
        try {
            const experience = this.experienceRepository.create({ ...experienceDetail, created_at: new Date() });
            result = this.experienceRepository.save(experience);
        } catch (error) {
            result = error;
        }
        return result;
    }

    updateExperience(experiences_id: number, experienceDetail: updateExperienceType) {
        let result;
        try {
            result = this.experienceRepository.update({ experiences_id }, { ...experienceDetail, updated_at: new Date() });
        } catch (error) {
            result = error;
        }
        return result;
    }

    deleteExperience(experiences_id: number) {
        let result;
        try {
            result = this.experienceRepository.delete({ experiences_id });
        } catch (error) {
            result = error;
        }
        return result;
    }
}

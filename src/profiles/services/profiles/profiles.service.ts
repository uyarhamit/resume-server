import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profiles } from 'src/typeorm/entities/Profiles';
import { createProfileType } from 'src/utils/profileTypes';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {

    constructor(@InjectRepository(Profiles) private profileRepository: Repository<Profiles>) { }

    createProfiles(profileDetails: createProfileType) {
        let result;
        try {
            const profile = this.profileRepository.create({ ...profileDetails, created_at: new Date() });
            result = this.profileRepository.save(profile);
        } catch (error) {
            result = error;
        }
        return result;
    }
}

import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createProfileDto } from 'src/profiles/dto/CreateProfile.dto';
import { Profiles } from 'src/typeorm/entities/Profiles';
import { Repository } from 'typeorm';

@Controller('profiles')
export class ProfilesController {
    constructor(@InjectRepository(Profiles) private profileRepository: Repository<Profiles>) {

    }

    createProfile(profileDetails: createProfileDto) {
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

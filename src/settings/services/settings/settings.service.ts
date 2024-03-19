import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createSettingDto } from 'src/settings/dto/CreateSettings.dto';
import { Settings } from 'src/typeorm/entities/Settings';
import { Repository } from 'typeorm';

@Injectable()
export class SettingsService {
    constructor(@InjectRepository(Settings) private settingsRepository: Repository<Settings>) { }

    allSettings() {
        let result;
        try {
            result = this.settingsRepository.find();
        } catch (error) {
            result = error;
        }
        return result;
    }

    createSettings(settingsDetail: createSettingDto) {
        let result;
        try {
            const setting = this.settingsRepository.create({ ...settingsDetail, created_at: new Date() })
            result = this.settingsRepository.save(setting);
        } catch (error) {
            result = error;
        }
        return result;
    }

    updateSettings(settings_id: number, settingsDetail: createSettingDto) {
        let result;
        try {
            result = this.settingsRepository.update({ settings_id }, { ...settingsDetail, updated_at: new Date() })
        } catch (error) {
            result = error;
        }
        return result;
    }
}

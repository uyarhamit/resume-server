import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createSettingDto } from 'src/settings/dto/CreateSettings.dto';
import { SettingsService } from 'src/settings/services/settings/settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private settingsService: SettingsService) { }

    @Get()
    async fetchSettings() {
        return await this.settingsService.allSettings();
    }

    @Post()
    async createSettings(@Body() settingsCreateDto: createSettingDto) {
        return await this.settingsService.createSettings(settingsCreateDto);
    }

    @Put(':id')
    async updateSettings(@Param('id', ParseIntPipe) settings_id: number, @Body() settingsCreateDto: createSettingDto) {
        return await this.settingsService.updateSettings(settings_id, settingsCreateDto);
    }
}

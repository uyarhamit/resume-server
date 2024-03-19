import { Module } from '@nestjs/common';
import { SettingsController } from './controllers/settings/settings.controller';
import { SettingsService } from './services/settings/settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Settings } from 'src/typeorm/entities/Settings';

@Module({
  imports: [TypeOrmModule.forFeature([Settings])],
  controllers: [SettingsController],
  providers: [SettingsService]
})
export class SettingsModule { }

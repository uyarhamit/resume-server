import { Module } from '@nestjs/common';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { ProfilesService } from './services/profiles/profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profiles } from 'src/typeorm/entities/Profiles';

@Module({
  imports: [TypeOrmModule.forFeature([Profiles])],
  controllers: [ProfilesController],
  providers: [ProfilesService]
})
export class ProfilesModule { }

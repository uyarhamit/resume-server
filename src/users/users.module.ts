import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/entities/Users';
import { Profiles } from 'src/typeorm/entities/Profiles';
import { ProfilesService } from 'src/profiles/services/profiles/profiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Profiles])],
  controllers: [UsersController],
  providers: [UsersService, ProfilesService]
})
export class UsersModule { }

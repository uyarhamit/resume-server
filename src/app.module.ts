import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from './typeorm/entities/Users';
import { UsersModule } from './users/users.module';
import { Experiences } from './typeorm/entities/Experiences';
import { ExperiencesModule } from './experiences/experiences.module';
import { ProfilesModule } from './profiles/profiles.module';
import { Profiles } from './typeorm/entities/Profiles';
import { Settings } from './typeorm/entities/Settings';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Hu5462547730',
    database: 'porfolio',
    entities: [Users, Experiences, Profiles, Settings],
    synchronize: true
  }), UsersModule, ExperiencesModule, ProfilesModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

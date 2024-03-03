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

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'dbname',
    entities: [Users, Experiences, Profiles],
    synchronize: true
  }), UsersModule, ExperiencesModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

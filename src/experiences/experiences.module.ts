import { Module } from '@nestjs/common';
import { ExperiencesService } from './services/experiences/experiences.service';
import { ExperiencesController } from './controllers/experiences/experiences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experiences } from 'src/typeorm/entities/Experiences';

@Module({
  imports: [TypeOrmModule.forFeature([Experiences])],
  controllers: [ExperiencesController],
  providers: [ExperiencesService]
})
export class ExperiencesModule { }

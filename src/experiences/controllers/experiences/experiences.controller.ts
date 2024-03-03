import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateExperienceDto } from 'src/experiences/dto/CreateExperience';
import { UpdateExperienceDto } from 'src/experiences/dto/UpdateExperience';
import { ExperiencesService } from 'src/experiences/services/experiences/experiences.service';

@Controller('experiences')
export class ExperiencesController {

    constructor(private experienceService: ExperiencesService) { }

    @Get()
    async fetchExperiences() {
        return await this.experienceService.allExperiences();
    }

    @Get(':id')
    async findExperience(@Param('id', ParseIntPipe) experiences_id: number) {
        return await this.experienceService.findExperience(experiences_id);
    }

    @Post()
    async createExperience(@Body() experienceCreateDto: CreateExperienceDto) {
        return await this.experienceService.createExperience(experienceCreateDto);
    }

    @Put(':id')
    async updateExperience(@Param('id', ParseIntPipe) experiences_id: number, @Body() experienceUpdateDto: UpdateExperienceDto) {
        return await this.experienceService.updateExperience(experiences_id, experienceUpdateDto);
    }

    @Delete(':id')
    async deleteExperience(@Param('id', ParseIntPipe) experiences_id: number) {
        return await this.experienceService.deleteExperience(experiences_id);
    }

}

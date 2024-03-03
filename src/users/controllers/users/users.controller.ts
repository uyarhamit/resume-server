import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createProfileDto } from 'src/profiles/dto/CreateProfile.dto';
import { ProfilesService } from 'src/profiles/services/profiles/profiles.service';
import { CreateUserDto } from 'src/users/dto/CreateUsers.dto';
import { UpdateUsersDto } from 'src/users/dto/UpdateUsers.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService, private profileService: ProfilesService) { }

    @Get()
    async fetchUsers() {
        return await this.userService.allUsers();
    }

    @Get('/withProfiles')
    async fetchUsersProfile() {
        return await this.userService.allUsersWithProfile();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUsersDto) {
        return await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.deleteUser(id);
    }

    @Post(':id/profiles')
    async creatUserProfile(@Param('id', ParseIntPipe) users_id: number, @Body() createUserProfileDto: createProfileDto) {
        const user = await this.userService.findUser(users_id);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        const result = await this.profileService.createProfiles(createUserProfileDto);
        user.profile = result;
        return this.userService.updateUserProfile(user);
    }
}

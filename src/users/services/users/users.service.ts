import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profiles } from 'src/typeorm/entities/Profiles';
import { Users } from 'src/typeorm/entities/Users';
import { CreateUsersParams, UpdateUsersParams } from 'src/utils/userTypes';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {

    }

    allUsers() {
        return this.usersRepository.find();
    }

    allUsersWithProfile(){
        return this.usersRepository.find({ relations: ['profile'] });
    }

    findUser(users_id: number) {
        return this.usersRepository.findOneBy({ users_id })
    }

    createUser(userDetails: CreateUsersParams) {
        const user = this.usersRepository.create({ ...userDetails, created_at: new Date() });
        return this.usersRepository.save(user);
    }

    updateUser(users_id: number, userDetails: UpdateUsersParams) {
        const user = this.usersRepository.update({ users_id }, { ...userDetails, updated_at: new Date() });
        return user;
    }

    deleteUser(users_id: number) {
        const user = this.usersRepository.delete({ users_id });
        return user;
    }

    updateUserProfile(user: Users) {
        this.usersRepository.save(user);
        return user;
    }

}

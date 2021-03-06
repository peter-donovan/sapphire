import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserNotFoundException } from 'internal/exceptions';
import { CreateUserDto } from 'users/dto';
import { User } from 'users/user.entity';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

	async findOneById(id: string): Promise<User> {
		const user: User = await this.usersRepository.findOne(id);
		if (!user) {
			throw new UserNotFoundException();
		}
		return user;
	}

	async findOneByUsername(username: string): Promise<User> {
		const user: User | undefined = await this.usersRepository.findOne({ username });
		if (!user) {
			throw new UserNotFoundException();
		}
		return user;
	}

	async createUser(createUserDto: CreateUserDto): Promise<User> {
		const newUser: User = await this.usersRepository.create(createUserDto);
		await this.usersRepository.save(newUser);
		return newUser;
	}
}

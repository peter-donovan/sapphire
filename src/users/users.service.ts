import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from '@sapphire/users/dto';
import { User } from '@sapphire/users/user.entity';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

	async findOneByUsername(username: string): Promise<User> {
		const user: User | undefined = await this.usersRepository.findOne({ username });
		if (!user) {
			throw new HttpException(`User not found.`, HttpStatus.NOT_FOUND);
		}
		return user;
	}

	async createUser(createUserDto: CreateUserDto): Promise<User> {
		const newUser: User = await this.usersRepository.create(createUserDto);
		await this.usersRepository.save(newUser);
		return newUser;
	}
}

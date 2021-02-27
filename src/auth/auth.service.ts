import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import argon2, { argon2id } from 'argon2';

import { Constants } from '@sapphire/internal/constants';
import { RegisterUserDto } from '@sapphire/users/dto';
import { LoginUserDto } from '@sapphire/users/dto/login-user.dto';
import { User } from '@sapphire/users/user.entity';
import { UsersService } from '@sapphire/users/users.service';

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService) {}

	async registerUser({ username, password }: RegisterUserDto): Promise<Omit<User, 'password'>> {
		const hashedPassword: string = await argon2.hash(password, { type: argon2id });
		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			// const { password, ...props } = user;
			return await this.usersService.createUser({
				username,
				password: hashedPassword,
			});
		} catch (error) {
			if (error?.code === Constants.UniqueViolationError) {
				throw new HttpException('User with that username already exists.', HttpStatus.CONFLICT);
			}

			throw new HttpException(
				'Something went wrong during the registration process.',
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	async loginUser({ username, password }: LoginUserDto): Promise<Omit<User, 'password'>> {
		try {
			const user: User = await this.usersService.findUserByUsername(username);
			await this.verifyPassword(password, user.password);
			// user.password = undefined;
			return user;
		} catch (error) {
			throw new HttpException('Invalid credentials.', HttpStatus.BAD_REQUEST);
		}
	}

	async verifyPassword(password: string, hashedPassword: string): Promise<void> {
		const isMatch: boolean = await argon2.verify(hashedPassword, password);
		if (!isMatch) {
			throw new HttpException('Invalid credentials.', HttpStatus.BAD_REQUEST);
		}
	}
}

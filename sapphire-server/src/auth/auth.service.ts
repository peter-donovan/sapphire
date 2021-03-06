import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import argon2, { argon2id } from 'argon2';
import { CookieOptions } from 'express';

import { ErrorCodes } from 'internal/errors';
import { TokenPayload } from 'internal/types';
import { CreateUserDto } from 'users/dto';
import { User } from 'users/user.entity';
import { UsersService } from 'users/users.service';

@Injectable()
export class AuthService {
	accessTokenName: string = this.configService.get('JWT_TOKEN_NAME');
	cookieOptions: CookieOptions = {
		httpOnly: true,
		maxAge: this.configService.get('JWT_EXPIRY_TIME') * 1000,
	};

	constructor(
		private readonly configService: ConfigService,
		private readonly jwtService: JwtService,
		private readonly usersService: UsersService
	) {}

	/**
	 * registerUser Attempts to register and create a new user. Upon success, the new user is saved
	 * to the database. A payload is returned containing the new user data with the password field omitted.
	 * If the username supplied is already in use, a Conflict (309) error is thrown.
	 * If something goes wrong for another reason, a generic Internal Server Error (500) is thrown.
	 * @param createUserDto Represents the username and password input from a user.
	 * @return User entity with sensitive properties omitted.
	 */
	async registerUser(createUserDto: CreateUserDto): Promise<User> {
		const hashedPassword: string = await argon2.hash(createUserDto.password, {
			// argon2id variant is used as it is best suited for password hashing
			type: argon2id,
		});
		try {
			return await this.usersService.createUser({
				...createUserDto,
				password: hashedPassword,
			});
		} catch (error) {
			// PostgreSQL will throw an error if the unique constraint is violated.
			if (error?.code === ErrorCodes.UniqueViolationError) {
				throw new HttpException('User with that username already exists.', HttpStatus.CONFLICT);
			}

			throw new HttpException('An unexpected error occurred.', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * validateUser Validates a user by attempting to fetch a user from the database that matches the username
	 * and password supplied by the user. If the username and password match the existing username / password hash
	 * (credential pair) stored in the database, a payload containing the authenticated user data is returned.
	 * If no user is found with the provided username, a Not Found (404) error is thrown.
	 * If a matching user is found but the password does not match, a Bad Request error (400) is thrown.
	 * @param username Username input from a user.
	 * @param password Password input from a user.
	 * @return User entity with sensitive properties omitted.
	 */
	async validateUser(username: string, password: string): Promise<User> {
		try {
			const user: User = await this.usersService.findOneByUsername(username);
			await this.verifyPassword(user.password, password);
			return user;
		} catch (error) {
			throw new HttpException('Invalid credentials.', HttpStatus.BAD_REQUEST);
		}
	}

	/**
	 * verifyPassword Compares a password input with a password hash stored in the database.
	 * @param hashedPassword Existing password hash stored in the database.
	 * @param password Password input from user.
	 */
	async verifyPassword(hashedPassword: string, password: string): Promise<void> {
		const isMatch: boolean = await argon2.verify(hashedPassword, password);
		if (!isMatch) {
			throw new HttpException('Invalid credentials.', HttpStatus.BAD_REQUEST);
		}
	}

	/**
	 * generateNewToken Generates a new access token (JWT) and inserts it into an HTTP-only cookie.
	 * @param user User entity stripped of any sensitive fields.
	 */
	generateNewToken(user: User): string {
		const payload: TokenPayload = {
			id: user.id,
			sub: user.username,
		};
		return this.jwtService.sign(payload);
	}
}

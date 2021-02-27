import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from '@sapphire/users/dto';
import { UsersService } from '@sapphire/users/users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('/register')
	async registerUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.createUser(createUserDto);
	}
}

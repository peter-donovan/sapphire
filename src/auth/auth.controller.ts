import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';

import { AuthService } from 'auth/auth.service';
import { LocalAuthGuard } from 'auth/guards';
import { AuthRequest } from 'internal/types';
import { CreateUserDto } from 'users/dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	async register(@Body() createUserDto: CreateUserDto) {
		return this.authService.registerUser(createUserDto);
	}

	@HttpCode(200)
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Req() { user }: AuthRequest) {
		return user;
	}
}

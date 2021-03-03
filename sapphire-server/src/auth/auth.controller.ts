import { Body, Controller, Delete, Get, HttpCode, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from 'auth/auth.service';
import { JwtAuthGuard, LocalAuthGuard } from 'auth/guards';
import { CurrentUser } from 'internal/decorators/current-user.decorator';
import { SafeUser } from 'internal/types';
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
	async login(@CurrentUser() user: SafeUser, @Res({ passthrough: true }) response: Response) {
		const token: string = this.authService.generateNewToken(user);
		response.cookie(this.authService.accessTokenName, token, this.authService.cookieOptions);
		return user;
	}

	@UseGuards(JwtAuthGuard)
	@Get('self')
	getCurrentUser(@CurrentUser() user: SafeUser) {
		return user;
	}

	@UseGuards(JwtAuthGuard)
	@Delete('logout')
	async logout(@Res({ passthrough: true }) response: Response) {
		response.clearCookie(this.authService.accessTokenName, this.authService.cookieOptions);
		return true;
	}
}

import { Body, Controller, Delete, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from 'auth/auth.service';
import { JwtAuthGuard, LocalAuthGuard } from 'auth/guards';
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
	async login(@Req() { user }: AuthRequest, @Res({ passthrough: true }) response: Response) {
		const token: string = this.authService.generateNewToken(user);
		// NOTE: Consider moving this logic to the service layer
		response.cookie('access_token', token, this.authService.cookieOptions);
		return user;
	}

	@UseGuards(JwtAuthGuard)
	@Get('self')
	getCurrentUser(@Req() { user }: AuthRequest) {
		return user;
	}

	@UseGuards(JwtAuthGuard)
	@Delete('logout')
	async logout(@Req() request: AuthRequest, @Res({ passthrough: true }) response: Response) {
		// NOTE: Consider moving this logic to the service layer
		response.clearCookie('access_token', this.authService.cookieOptions);
		return true;
	}
}

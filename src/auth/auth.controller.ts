import { Body, Controller, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

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

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Req() { user }: AuthRequest, @Res() response: Response) {
		const token: string = this.authService.generateNewToken(user);
		response.cookie('access_token', token, this.authService.cookieOptions);
		return response.status(HttpStatus.OK).send(user);
	}
}

import { Body, Controller, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';

import { AuthService } from 'auth/auth.service';
import { LocalAuthGuard } from 'auth/guards';
import { Response } from 'express';
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
		response.setHeader('Set-Cookie', token);
		return response.status(HttpStatus.OK).send(user);
	}
}

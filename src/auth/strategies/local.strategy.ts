import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '@sapphire/auth/auth.service';
import { SafeUser } from '@sapphire/internal/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super();
	}

	async validate(username: string, password: string): Promise<SafeUser> {
		const user: SafeUser = await this.authService.validateUser(username, password);
		if (!user) {
			throw new UnauthorizedException();
		}

		return user;
	}
}

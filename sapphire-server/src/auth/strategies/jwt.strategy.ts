import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { TokenPayload } from 'internal/types';
import { User } from 'users/user.entity';
import { UsersService } from 'users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly configService: ConfigService, private readonly usersService: UsersService) {
		super({
			ignoreExpiration: false,
			issuer: configService.get('JWT_ISSUER'),
			jwtFromRequest: ExtractJwt.fromExtractors([
				(request: Request) => {
					const tokenName: string = configService.get('JWT_TOKEN_NAME');
					return request.cookies[tokenName];
				},
			]),
			secretOrKey: configService.get('JWT_SECRET'),
		});
	}

	async validate(payload: TokenPayload): Promise<User> {
		return this.usersService.findOneById(payload.id);
	}
}

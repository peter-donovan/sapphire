import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { TokenPayload } from 'internal/types';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UsersService } from 'users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly configService: ConfigService, private readonly usersService: UsersService) {
		super({
			ignoreExpiration: false,
			issuer: configService.get('JWT_ISSUER'),
			jwtFromRequest: ExtractJwt.fromExtractors([
				(request: Request) => {
					return request?.cookies?.access_token;
				},
			]),
			secretOrKey: configService.get('JWT_SECRET'),
		});
	}

	async validate(payload: TokenPayload) {
		return this.usersService.findOneByUsername(payload.sub);
	}
}
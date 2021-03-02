import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from 'auth/auth.controller';
import { AuthService } from 'auth/auth.service';
import { LocalStrategy } from 'auth/strategies/local.strategy';
import { UsersModule } from 'users/users.module';

@Module({
	imports: [
		UsersModule,
		PassportModule,
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				signOptions: {
					expiresIn: configService.get('JWT_EXPIRY_TIME'),
					issuer: configService.get('JWT_ISSUER'),
					keyid: configService.get('JWT_KEY_ID'),
				},
				secret: configService.get('JWT_SECRET'),
			}),
		}),
	],
	providers: [AuthService, LocalStrategy],
	controllers: [AuthController],
})
export class AuthModule {}

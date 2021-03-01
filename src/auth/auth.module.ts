import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from '@sapphire/auth/auth.controller';
import { AuthService } from '@sapphire/auth/auth.service';
import { LocalStrategy } from '@sapphire/auth/strategies/local.strategy';
import { UsersModule } from '@sapphire/users/users.module';

@Module({
	imports: [UsersModule, PassportModule],
	providers: [AuthService, LocalStrategy],
	controllers: [AuthController],
})
export class AuthModule {}

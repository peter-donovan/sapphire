import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { AuthModule } from 'auth/auth.module';
import { DatabaseModule } from 'database/database.module';
import { PostsModule } from 'posts/posts.module';
import { UsersModule } from 'users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			validationSchema: Joi.object({
				// Environment override
				NODE_ENV: Joi.string(),
				// Application
				GLOBAL_ROUTE_PREFIX: Joi.string().required(),
				PORT: Joi.number().required(),
				// JSON Web Tokens
				JWT_EXPIRY_TIME: Joi.number().required(),
				JWT_ISSUER: Joi.string().required(),
				JWT_KEY_ID: Joi.string().required(),
				JWT_SECRET: Joi.string().required(),
				JWT_TOKEN_NAME: Joi.string().required(),
				// Redis cache
				REDIS_HOST: Joi.string().required(),
				REDIS_PORT: Joi.number().required(),
				// TypeORM URL / Database URL
				TYPEORM_URL: Joi.string().required(),
				// WebSocket Gateway path
				WEBSOCKET_PATH: Joi.string().required(),
			}),
		}),
		DatabaseModule,
		PostsModule,
		UsersModule,
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

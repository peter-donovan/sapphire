import Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			validationSchema: Joi.object({
				// Application
				NODE_ENV: Joi.string(),
				PORT: Joi.number(),
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
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

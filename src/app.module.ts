import Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			validationSchema: Joi.object({
				NODE_ENV: Joi.string(),
				// Redis cache
				REDIS_HOST: Joi.string().required(),
				REDIS_PORT: Joi.number().required(),
				// TypeORM URL / Database URL
				TYPEORM_URL: Joi.string().required(),
				// Application port
				PORT: Joi.number(),
				// WebSocket Gateway path
				WEBSOCKET_PATH: Joi.string().required(),
			}),
		}),
		PostsModule,
		DatabaseModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

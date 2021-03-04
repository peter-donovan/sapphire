import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';

import { AppModule } from 'app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configService: ConfigService = app.get(ConfigService);

	const port = configService.get('PORT');
	const globalRoutePrefix: string = configService.get('GLOBAL_ROUTE_PREFIX');

	// Initialize global middlewares
	app.use(cookieParser());
	app.setGlobalPrefix(globalRoutePrefix);

	await app.listen(port);

	Logger.log(`Started: http://localhost:${port}/${globalRoutePrefix}`, 'HTTP Service');
}

bootstrap().catch((err) => {
	Logger.error(err);
	process.exit(1);
});

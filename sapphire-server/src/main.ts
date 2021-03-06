import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { AppModule } from 'app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configService: ConfigService = app.get(ConfigService);

	const port = configService.get('PORT');
	const globalRoutePrefix: string = configService.get('GLOBAL_ROUTE_PREFIX');

	// Initialize global middlewares
	app.use(compression()); // Disable if using a reverse proxy such as Nginx
	app.use(cookieParser());
	app.use(helmet());

	app.setGlobalPrefix(globalRoutePrefix);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

	await app.listen(port);

	Logger.log(`Started: http://localhost:${port}/${globalRoutePrefix}`, 'HTTP Service');
}

bootstrap().catch((err) => {
	Logger.error(err);
	process.exit(1);
});

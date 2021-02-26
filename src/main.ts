import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from 'app.module';

const port: number = +(process.env.PORT ?? 3400);

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(port);
}

bootstrap().catch((err) => {
	Logger.error(err);
	process.exit(1);
});

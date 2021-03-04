import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions, getConnectionOptions } from 'typeorm';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
				// Override default options via the `source` object within the `Object.assign` call
				const connectionOptions: ConnectionOptions = await getConnectionOptions();
				return Object.assign(connectionOptions, {
					synchronize: configService.get('NODE_ENV') !== 'production',
				});
			},
		}),
	],
})
export class DatabaseModule {}

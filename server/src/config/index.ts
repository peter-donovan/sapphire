import 'dotenv/config';

// Application / Server
interface AppConfig {
	host: string;
	port: number;
}

// PostgreSQL database
interface DatabaseConfig {
	url: string;
}

// Redis cache
interface RedisConfig {
	host: string;
	port: number;
}

// WebSocket Server
interface WebSocketConfig {
	clientTracking: boolean;
	maxPayload: number;
	noServer: boolean;
	path: string;
}

// Config allows for setting configuration values safely via type-checking
interface Config {
	app: AppConfig;
	db: DatabaseConfig;
	redis: RedisConfig;
	ws: WebSocketConfig;
}

// FIXME: Come up with an easier-to-use and more robust solution for getting config values
export const config: Config = {
	app: {
		host: process.env.HOST ?? 'localhost',
		port: +(process.env.PORT ?? 3400),
	},
	db: {
		url: process.env.DATABASE_URL ?? 'postgres://postgres@localhost:5432/sapphire',
	},
	redis: {
		host: process.env.REDIS_HOST ?? 'localhost',
		port: +(process.env.REDIS_PORT ?? 6379),
	},
	ws: {
		clientTracking: true,
		maxPayload: +(process.env.WEBSOCKET_MAX_PAYLOAD ?? 1024 * 1024),
		noServer: true,
		path: process.env.WEBSOCKET_PATH ?? '/ws',
	},
};

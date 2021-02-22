import 'dotenv/config';

// Redis cache
export interface RedisConfig {
	host: string;
	port: number;
}

// PostgreSQL database
export interface DatabaseConfig {
	url: string;
}

// Http Server
export interface HttpConfig {
	host: string;
	port: number;
}

// WebSocket Server
export interface WebSocketConfig {
	clientTracking: boolean;
	maxPayload: number;
	noServer: boolean;
	path: string;
}

// Config allows for setting configuration values safely via type-checking
interface Config {
	databaseConfig: DatabaseConfig;
	httpConfig: HttpConfig;
	redisConfig: RedisConfig;
	webSocketConfig: WebSocketConfig;
}

// FIXME: Come up with an easier-to-use and more robust solution for getting config values
const config: Config = {
	redisConfig: {
		host: process.env.REDIS_HOST ?? 'localhost',
		port: +(process.env.REDIS_PORT ?? 6379),
	},
	databaseConfig: {
		url: process.env.DATABASE_URL ?? 'postgres://postgres@localhost:5432/sapphire',
	},
	httpConfig: {
		host: process.env.HOST ?? 'localhost',
		port: +(process.env.PORT ?? 3400),
	},
	webSocketConfig: {
		clientTracking: true,
		maxPayload: +(process.env.WEBSOCKET_MAX_PAYLOAD ?? 1024 * 1024),
		noServer: true,
		path: process.env.WEBSOCKET_PATH ?? '/ws',
	},
};

// FIXME: Replace this with a function? Create a type-safe `getter` or convenience class for retrieving config values?
export const { redisConfig, databaseConfig, httpConfig, webSocketConfig }: Config = config;

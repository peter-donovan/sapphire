// import `dotenv` to ensure that environment variables are set
import 'dotenv/config';

interface Config {
	cache: CacheConfig;
	database: DatabaseConfig;
	server: ServerConfig;
}

const config: Config = {};
// console.log(+process.env.PORT ?? 3400);

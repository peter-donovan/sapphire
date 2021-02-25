import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from '../config';
import { Log } from '../logger';

// Set database URL to TYPEORM_URL environment variable: defaults to development database
const databaseUrl: string = process.env.TYPEORM_URL ?? config.db.url;

const defaultOptions: PostgresConnectionOptions = {
	name: 'default',
	type: 'postgres',
	url: databaseUrl,
};

export async function createConnectionPool() {
	try {
		const connectionOptions: ConnectionOptions = await getConnectionOptions();
		Log.info('Connection options found:', connectionOptions);

		// Create a new database connection
		const connection: Connection = await createConnection(connectionOptions);
		if (connection.isConnected) {
			Log.info('Successfully connected to database and initialized connection pool.');
		}
	} catch (err) {
		throw new Error('Unable to connect to database. Please check your TypeORM connection configuration.');
	}
}

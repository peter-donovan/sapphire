import 'reflect-metadata';

import express, { Express, Request } from 'express';
import http from 'http';
import { Socket } from 'net';
import ws from 'ws';

import { config } from './config';
import { createConnectionPool } from './database';
import { Log } from './logger';
import { applyMiddleware } from './middleware';

// TODO: move environment variable settings to the `config` directory
const host: string = config.app.host;
const port: number = config.app.port;

// Create Express application instance
const app: Express = express();

async function bootstrap() {
	// Connect to database
	await createConnectionPool();

	Log.info(`Bootstrapping server. Starting in ${config.app.environment.toUpperCase()} mode.`);

	// Apply Express application middleware
	applyMiddleware(app);

	// attach routes to the Express app instance
	// initControllers(app);
	// app.use('/auth', authController);
	// app.use('/users', usersController);
	// app.use('/messages', messagesController);

	// Create http server instance and pass Express app context
	const server = http.createServer(app);

	// Create a separate WebSocket server instance
	const wss = new ws.Server({ ...config.ws });

	// handle websocket connections
	wss.on('connection', (socket: Socket, request: Request) => {
		Log.info('New connection from Socket:', request.socket.address());
		socket.emit('message', 'Welcome to Sapphire');
	});

	// start the server to begin listening for client requests / connections
	server.listen({ port, host }, () => {
		Log.info(`HTTP service available at: http://${host}:${port}/`);
		Log.info(`WebSocket service available at: ws://${host}:${port}/ws`);
	});
}

bootstrap().catch((err) => {
	Log.error(err);
	process.exit(1);
});

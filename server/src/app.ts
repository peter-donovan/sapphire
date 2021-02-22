import 'reflect-metadata';

// FIXME: Limit number of imports into entrypoint file; abstract logic into functions in appropriate directories
import cors from 'cors';
import express, { Express, Request } from 'express';
import helmet from 'helmet';
import http from 'http';
import { Socket } from 'net';
import ws, { Server as WebSocketServer } from 'ws';

import { httpConfig, webSocketConfig } from './config';

// TODO: move environment variable settings to the `config` directory
const host: string = httpConfig.host;
const port: number = httpConfig.port;

// Create Express application instance
const app: Express = express();

// connect to database

// attach middleware functions
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// attach routes to the Express app instance

// Create http server instance and pass Express app context
const server = http.createServer(app);

// Create WebSocket server instance and wrap the HTTP Server
const wss: WebSocketServer = new ws.Server({
	...webSocketConfig,
});

// handle websocket connections
wss.on('connection', (socket: Socket, request: Request) => {
	console.log('New connection from Socket:', request.socket.address());
	socket.emit('message', 'Welcome to Sapphire');
});

// start the server to begin listening for client requests / connections
server.listen({ port, host }, () => {
	console.log(`Server started.\nHTTP service available at: http://${host}:${port}/`);
	console.log(`WebSocket service available at: ws://${host}:${port}/ws`);
});

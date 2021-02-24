import compression from 'compression';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';

/**
 * applyMiddleware Attaches middleware to an Express instance
 * @param app The Express application
 */
export function applyMiddleware(app: Express): void {
	// TODO: Pass custom options to middlewares to harden server
	app.use(compression());
	app.use(cors());
	app.use(helmet());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
}

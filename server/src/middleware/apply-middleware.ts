import compression from 'compression';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';

/**
 * applyMiddleware Attaches middleware to an Express instance
 * @param app The Express application
 */
export const applyMiddleware = (app: Express) => {
	app.use(compression());
	app.use(cors());
	app.use(helmet());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
};

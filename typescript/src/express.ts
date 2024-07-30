import express from 'express'
import { Request, Response, Application } from 'express';
import routes from './routes';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

export const expressApp = async (app: Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.get('/', async (req: Request, res: Response) => {
      res.status(200).json({
        message: 'Hello World'
      });
    });
    app.use(morgan('tiny', { stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }) }))
    routes(app);
}
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';
import ErrorHandlerMiddleware from '@shared/middlewares/ErrorHandlerMiddleware';
import { AppDataSource } from '@shared/typeorm/data-source';

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use(routes);
    app.use(errors());

    // Middleware de tratamento de erros (deve ser o último)
    app.use(
      (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        ErrorHandlerMiddleware.handleError(err, req, res, next);
      },
    );

    app.listen(3333, () => {
      console.log('Server started on port 3333! 🏆');
    });
  })
  .catch(error => {
    console.error('Failed to connect to the database:', error);
  });

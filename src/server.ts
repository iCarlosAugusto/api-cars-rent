import 'reflect-metadata';
import express, { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import "express-async-errors";
import { categoriesRoutes } from './routes/categories.routes';
import "./database";
import "./shared/container";
import { userRoutes } from './routes/users.routes';
import { authenticationRoute } from './routes/authentication.routes';
import { AppError } from './errors/AppError';
import { carsRoutes } from './routes/cars.routes';

const app = express();

app.use(express.json());

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
    console.log('ENTROU NO APP USE CASE');
    if (err instanceof AppError){
      console.log('ENTROU NO PRIMEIRO IF');
      return res.status(err.statusCode).json({
        message: 'err.message',
      });
  
    }

    return res.status(500).json({
      status: "error",
      message: `Internal server error -> ${err.message}`,
    });
  });

app.use("/categories", categoriesRoutes);
app.use("/users", userRoutes);
app.use("/authentication", authenticationRoute);
app.use("/cars", carsRoutes);

app.listen(3333, () => console.log('Server is running...'));
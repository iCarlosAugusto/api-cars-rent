import 'reflect-metadata';
import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import "./database";
import "./shared/container";
const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log('Server is running...'));
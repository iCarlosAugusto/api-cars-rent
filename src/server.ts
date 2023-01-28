import 'reflect-metadata';
import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import "./database";
import "./shared/container";
import { userRoutes } from './routes/users.routes';
import { authenticationRoute } from './routes/authentication.routes';
const app = express();
//Rockeseat - Usuario => Criando repositorio de usuario

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/users", userRoutes);
app.use("/authentication", authenticationRoute);

app.listen(3333, () => console.log('Server is running...'));
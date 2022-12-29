import { AppDataSource } from "./data-source";
import colors from "colors/safe";
import dotenv from "dotenv";
import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import BodyParser from "body-parser";
import { User } from "./entity/User";

// import UserRouter from './routes/users';
import { UserController } from "./controller/UserController";

dotenv.config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(async () => {

    const app: Express = express();
    app.use(express.json());


    app.get("/", (request: Request, response: Response) => {
      response.status(200).send("Node, Express and TypeORM is running");
    });

    app.get("/users", UserController.getAll);
    app.get("/users/:id", UserController.get);
    app.post("/users", UserController.create);
    app.put("/users/:id", UserController.update);
    app.delete("/users/:id", UserController.delete);

    // run app

    app.listen(PORT);
    console.log(colors.blue(`🚀 Server is up and running on port ${HOST}:${PORT}`));

  })
  .catch((error) => console.log(error));

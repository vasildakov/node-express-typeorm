import express, { Express, Request, Response } from "express";
import colors from "colors/safe";
import dotenv from "dotenv";

import { AppDataSource } from "./data-source";
import { UserRouter } from "./routes/UserRouter";

dotenv.config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(async () => {

      const app: Express = express();

      app.use(express.json());

      app.get("/", (request: Request, response: Response) => {
        response.status(200).send("🚀 Node, Express and TypeORM is running");
      });

      app.use(UserRouter);

      app.listen(PORT);
      console.log(colors.blue(`🚀 Server is up and running on port ${HOST}:${PORT}`));

  })
  .catch((error) => console.log(error));

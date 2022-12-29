import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
//import { User } from "./entity/User"
//import { Category } from "./entity/Category"

dotenv.config();


export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  synchronize: false,
  dropSchema: false,
  migrationsRun: false,
  migrationsTableName: "migrations",
  logging: false,
  // entities: [User, Category],
  entities: [`${__dirname}/entity/**/*{.js,.ts}`],
  migrations: [`${__dirname}/migration/**/*{.js,.ts}`],
  subscribers: [`${__dirname}/subscribers/**/*{.js,.ts}`]
});

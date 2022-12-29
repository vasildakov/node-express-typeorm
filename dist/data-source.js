"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
//import { User } from "./entity/User"
//import { Category } from "./entity/Category"
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
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

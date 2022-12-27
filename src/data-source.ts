import "reflect-metadata"
import { DataSource } from "typeorm"
//import { User } from "./entity/User"
//import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1",
    database: "type_orm_test",
    synchronize: true,
    logging: false,
    // entities: [User, Category],
    entities: ['./src/entity/**/*.ts'],
    migrations: ['./src/migration/**/*.ts'],
    subscribers: ['./src/subscriber/**/*.ts']
});

import express, { Express, Request, Response } from 'express';
import { User } from './entity/User';
import { AppDataSource } from './data-source';
import colors from 'colors/safe';

AppDataSource
    .initialize()
    .then(() => {
        console.log(colors.blue("Data Source has been initialized!"))
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


// create and setup express app
const app: Express = express()
app.use(express.json())




// start express server
app.listen(3001)
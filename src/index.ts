import { AppDataSource } from './data-source'
import colors from 'colors/safe';
import express, { Express, Request, Response } from 'express';
import BodyParser from "body-parser"; 
import { User } from "./entity/User"

// import UserRouter from './routes/users';
import { UserController } from './controller/UserController';


import 'reflect-metadata'; 



AppDataSource.initialize().then(async () => {

    // create express app
    const app: Express = express();
    app.use(express.json());

    /* Routes.forEach(route => { 
        app[route.method](route.route, (request: Request, response: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](request, response, next); 
            if (result instanceof Promise) { 
                result.then(
                    result => result !== null && 
                    result !== undefined ? response.send(result) : undefined); 
            } else if (result !== null && result !== undefined) { 
                response.json(result); 
            } 
        });
    }); */

    
    app.get('/', (request: Request, response: Response) => {
        response.status(200).send('Node, Express and TypeORM is running');
    });

    app.get('/users', UserController.getAll)
    app.get('/users/:id', UserController.get)
    app.post('/users', UserController.post)


    // run app
    const PORT = 3005;
    app.listen(PORT);
    console.log(colors.blue(`🚀 Express application is up and running on port ${PORT}`));


    /* 
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
    */


}).catch(error => console.log(error))

import { Request, Response } from 'express';
import { User } from "../entity/User";
import { AppDataSource } from 'data-source';

export class UserController {

    static async get(request: Request, response: Response) { 

        console.log(request.params.id);
        const user = await AppDataSource.getRepository(User).findOneBy({
            id: Number(request.params.id),
        })
        return response.status(200).json(user)
    }

    static async getAll(request: Request, response: Response) {
        const users: User[] = await AppDataSource.getRepository(User).find()
        response.status(200).json(users)
    }

    static async post(request: Request, response: Response) {
        try {
            //console.log('Got body:', request.body);
            //response.status(200).send(request.body);
            
            const data = request.body;

            const user = new User()
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.age = data.age;

            await AppDataSource.manager.save(user)
            console.log("Saved a new user with id: " + user.id)

            response.status(200).send(user);

        } catch(error) {
            console.log(error)
        }
    }
}

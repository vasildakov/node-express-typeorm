import { Request, Response } from 'express';
import { User } from "../entity/User";
import { AppDataSource } from 'data-source';

export class TestController {

    static async get(request: Request, response: Response) {
        const users: User[] = await AppDataSource.getRepository(User).find()
        response.json(users)
    }
}
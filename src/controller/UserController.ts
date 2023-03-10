import { Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const repository: Repository<User> = AppDataSource.getRepository(User);

export class UserController {

    static async get(request: Request, response: Response) {
        const id = Number(request.params.id);

        const user = await repository.findOneBy({id: id});

        return response.status(200).json(user);
    }


    static async getAll(request: Request, response: Response) {
      const users: User[] = await repository.find();

      response.status(200).json(users);
    }


    static async create(request: Request, response: Response) {
        try {
            const user = repository.create(request.body);
            
            const results = await repository.manager.save(user)
            console.log(results);

            return response.status(200).send(results)

        } catch (error) {
            console.error(error);
        }
    }


    static async update(request: Request, response: Response) {
        try {
            const id = Number(request.params.id);

            const user = await repository.findOneBy({id: id})

            if (null === user) {
              throw new Error(`User with id ${id} not found!`);
            }


            repository.merge(user, request.body)
            const results = await repository.save(user)
            return response.send(results)
            
        } catch (error: any) {
            console.error(error);
            return response.status(404).json({
                'status': 404,
                'error': error.message
            });
        }
    }


    static async delete(request: Request, response: Response) {
        try {
          const id: number = Number(request.params.id);

          const results = await AppDataSource.getRepository(User).delete(id)
          return response.send(results)

        } catch (error) {
          console.error(error);
        }
    }
}

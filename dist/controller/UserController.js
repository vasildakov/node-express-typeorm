"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
class UserController {
    static async get(request, response) {
        const id = Number(request.params.id);
        const user = await data_source_1.AppDataSource.getRepository(User_1.User).findOneBy({ id: id });
        return response.status(200).json(user);
    }
    static async getAll(request, response) {
        const users = await data_source_1.AppDataSource.getRepository(User_1.User).find();
        response.status(200).json(users);
    }
    static async create(request, response) {
        try {
            const user = data_source_1.AppDataSource.getRepository(User_1.User).create(request.body);
            const results = await data_source_1.AppDataSource.manager.save(user);
            console.log(results);
            return response.status(200).send(results);
        }
        catch (error) {
            console.error(error);
        }
    }
    static async update(request, response) {
        try {
            const id = Number(request.params.id);
            const user = await data_source_1.AppDataSource.getRepository(User_1.User).findOneBy({ id: id });
            if (null === user) {
                throw new Error(`User with id ${id} not found!`);
            }
            data_source_1.AppDataSource.getRepository(User_1.User).merge(user, request.body);
            const results = await data_source_1.AppDataSource.getRepository(User_1.User).save(user);
            return response.send(results);
        }
        catch (error) {
            console.error(error);
            return response.status(404).json({
                'status': 404,
                'error': error.message
            });
        }
    }
    static async delete(request, response) {
        try {
            const id = Number(request.params.id);
            const results = await data_source_1.AppDataSource.getRepository(User_1.User).delete(id);
            return response.send(results);
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.UserController = UserController;

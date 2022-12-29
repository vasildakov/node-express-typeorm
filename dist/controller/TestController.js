"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const User_1 = require("../entity/User");
const data_source_1 = require("src/data-source");
class TestController {
    static async get(request, response) {
        const users = await data_source_1.AppDataSource.getRepository(User_1.User).find();
        response.json(users);
    }
}
exports.TestController = TestController;

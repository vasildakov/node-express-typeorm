"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const safe_1 = __importDefault(require("colors/safe"));
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
// import UserRouter from './routes/users';
const UserController_1 = require("./controller/UserController");
dotenv_1.default.config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
data_source_1.AppDataSource.initialize()
    .then(async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get("/", (request, response) => {
        response.status(200).send("Node, Express and TypeORM is running");
    });
    app.get("/users", UserController_1.UserController.getAll);
    app.get("/users/:id", UserController_1.UserController.get);
    app.post("/users", UserController_1.UserController.create);
    app.put("/users/:id", UserController_1.UserController.update);
    app.delete("/users/:id", UserController_1.UserController.delete);
    // run app
    app.listen(PORT);
    console.log(safe_1.default.blue(`🚀 Server is up and running on port ${HOST}:${PORT}`));
})
    .catch((error) => console.log(error));

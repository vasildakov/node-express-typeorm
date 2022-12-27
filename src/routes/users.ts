import express, { Router, Request, Response } from 'express';

import { UserController } from 'controller/UserController';

// register routes
const UserRouter: Router = express.Router()

UserRouter.get("/users", UserController.get)

/* 
router.get("/users/:id", function (req: Request, res: Response) {
    // here we will have logic to return user by id
})

router.post("/users", function (req: Request, res: Response) {
    // here we will have logic to save a user
})

router.put("/users/:id", function (req: Request, res: Response) {
    // here we will have logic to update a user by a given user id
})

router.delete("/users/:id", function (req: Request, res: Response) {
    // here we will have logic to delete a user by a given user id
})
*/

export default UserRouter
import { Router } from 'express';
import { UserController } from "../controller/UserController";

const router: Router = Router();

router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.get);
router.post("/users", UserController.create);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

export { router as UserRouter }

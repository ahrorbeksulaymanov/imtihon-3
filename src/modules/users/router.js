import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import controller from "./controller.js";

const router = Router()

router.get('/users', checkToken, controller.GET)
router.post('/login', controller.LOGIN)


export default router;
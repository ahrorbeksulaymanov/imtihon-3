import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import controller from "./controller.js";

const router = Router()

router.get('/categories', controller.GET)
router.post('/categories', checkToken, controller.POST)
router.delete('/categories/:id', checkToken, controller.DELETE)
router.put('/categories/:id', checkToken, controller.UPDATE)


export default router;
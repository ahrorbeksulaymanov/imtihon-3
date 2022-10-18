import { Router } from "express";
import checkToken from "../../middlewares/checkToken.js";
import controller from "./controller.js";

const router = Router()

router.get('/sub-categories', controller.GET)
router.post('/sub-categories', checkToken, controller.POST)
router.delete('/sub-categories/:id', checkToken, controller.DELETE)
router.put('/sub-categories/:id', checkToken, controller.UPDATE)


export default router;
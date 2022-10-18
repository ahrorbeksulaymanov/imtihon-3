import { Router } from "express";
import controller from "./controller.js";
import checkToken from "../../middlewares/checkToken.js";
const router = Router()

router.get('/events', controller.GET)
router.get('/events/:id', controller.GETONE)
router.post('/events', checkToken, controller.POST)
router.delete('/events/:id', checkToken, controller.DELETE)
router.put('/events/:id', checkToken, controller.UPDATE)
router.put('/events/check-permission/:id', checkToken, controller.CHECKPERMISSION)


export default router;
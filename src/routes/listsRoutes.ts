import {Router, Request, Response} from "express";
import {listsController} from "../controllers/listsController"

const router: Router = Router();

router.get("/favorites", listsController.findFavorites);


export default router;  
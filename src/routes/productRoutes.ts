import { Router, Request, Response} from "express";
import { productController } from "../controllers/productController";

const router: Router = Router();


router.post('/', productController.create);
router.get('/', productController.findAll);
router.get('/', productController.findById);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.patch('/:id', productController.favorite);


router.get("/healthProducts", (req: Request, res: Response) => {
    res.send("Health Products check is OK!");
})


export default router;

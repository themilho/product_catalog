import { Router, Request, Response } from "express";
import productRoutes from "./productRoutes";
import listsRoutes from "./listsRoutes";
import authRoutes from "./authRoutes";

const router: Router = Router();

router.get("/", (req: Request, res: Response) =>{
    res.send("Welcome to the API!")
})

router.use("/products", productRoutes);
router.use("/lists",listsRoutes);
router.use("/auth", authRoutes);

export default router;
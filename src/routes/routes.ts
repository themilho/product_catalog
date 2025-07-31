import { Router, Request, Response} from "express";
const router: Router = Router();


router.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the API!");
});

router.get("/products", (req: Request, res: Response) => {
    res.send("List all products");
});

router.post("/products", (req:Request, res: Response) => {
    res.send("Create a new product");
});

router.put("/products/:id", (req: Request, res: Response) => {
    const productId: string = req.params.id;
    res.send(`Update product with ID: ${productId}`);
});

router.delete("/products/:id", (req: Request, res: Response) => {
    const productId: string = req.params.id;
    res.send(`Delete product with ID: ${productId}`);
});


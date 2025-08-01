import {Router, Request, Response} from "express";
const router: Router = Router();


router.get("/", (req: Request, res: Response) => {
    res.send("Show all lists");
})

router.post("/",(req: Request, res: Response) => {
    res.send("Create a new list");
})

router.put("/:id", (req: Request, res: Response) => {
    const listId: string = req.params.id;
    res.send(`Update list with ID ${listId}`)
})

router.delete("/:id", (req: Request, res: Response) =>{
    const listId: string = req.params.id;
    res.send(`Delete list with ID ${listId}`);
})

router.patch("/:id", (req: Request, res: Response) => {
    const listId: string = req.params.id;
    res.send(`List with ID ${listId} favorited`)
})


router.get("/healthLists", (req: Request, res: Response) => {
    res.send("Health Lists check is OK!")
})

export default router;
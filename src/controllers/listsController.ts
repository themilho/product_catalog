import {Request, Response} from "express";
import {productService} from "../services/productService"

export const listsController = {
findFavorites: async (req: Request, res: Response) => {
    const favorites = await productService.findFavorites();
    return res.json(favorites);
    },
};
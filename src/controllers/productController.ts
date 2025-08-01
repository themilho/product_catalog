import {Request, Response} from "express";
import {productService} from "../services/productService";


export const productController = {
    create: async(req: Request, res: Response) => {
        const product = await productService.create(req.body);
        return res.status(201).json(product);
    },

    findAll: async(req: Request, res: Response) => {
        const product = await productService.findAll();
        return res.json(product);
    },

    findById: async(req: Request, res: Response) => {
        const product = await productService.findById(Number(req.params.id));
        return res.json(product);
    },

    update: async(req: Request, res: Response) => {
        const product = await productService.update(Number(req.params.id),req.body);
        return res.json(product);
    },

    delete: async (req: Request, res: Response) => {
        const product = await productService.delete(Number(req.params.id));
        return res.status(204).send();
    },

    favorite: async (req: Request, res: Response) => {
        const product = await productService.favorite(Number(req.params.id), req.body?.favorite);
        return res.json(product);
    }
}
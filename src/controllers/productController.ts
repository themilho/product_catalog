import {Request, Response} from "express";
import {productService} from "../services/productService";


export const productController = {
    create: async(req: Request, res: Response, next: any) => {
        try {
            console.log('=== CREATE PRODUCT REQUEST ===');
            console.log('Request body:', JSON.stringify(req.body, null, 2));
            console.log('Request headers:', req.headers);
            
            const product = await productService.create(req.body);
            console.log('Product created successfully:', product);
            return res.status(201).json(product);
        } catch (error) {
            console.error('Error in create controller:', error);
            next(error);
        }
    },

    findAll: async(req: Request, res: Response, next: any) => {
        try {
            const product = await productService.findAll();
            return res.json(product);
        } catch (error) {
            next(error);
        }
    },

    findById: async(req: Request, res: Response, next: any) => {
        try {
            const product = await productService.findById(Number(req.params.id));
            return res.json(product);
        } catch (error) {
            next(error);
        }
    },

    update: async(req: Request, res: Response, next: any) => {
        try {
            const product = await productService.update(Number(req.params.id),req.body);
            return res.json(product);
        } catch (error) {
            next(error);
        }
    },

    delete: async (req: Request, res: Response, next: any) => {
        try {
            const product = await productService.delete(Number(req.params.id));
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    favorite: async (req: Request, res: Response, next: any) => {
        try {
            const product = await productService.favorite(Number(req.params.id), req.body?.favorite);
            return res.json(product);
        } catch (error) {
            next(error);
        }
    }
}
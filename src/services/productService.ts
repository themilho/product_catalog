import {ZodError} from "zod";
import {ProductSchema} from "../schema/productSchema";
import { productRepository } from "../repositories/productRepository";

export const productService = {
  create: async (input: unknown) => {
    try {
      const data = ProductSchema.parse(input);
      return await productRepository.create(data);
    } catch (error) {
      if (error instanceof ZodError) {
        throw {
          status: 400,
          message: 'Erro de validação',
          issues: error.issues,
        };
      }
      throw error;
    }
  },

  findAll: async () => {
    return await productRepository.findAll()
  },

  findById: async (id: number) => {
    const product= await productRepository.findById(id);
    if (!product) {
      throw { status: 404, message: 'Produto não encontrado' };
    }
    return product;
  },

  update: async (id: number, input: unknown) => {
    try {
      const data = ProductSchema.parse(input);
      const exists = await productRepository.findById(id);
      if (!exists) {
        throw { status: 404, message: 'Produto não encontrado' };
      }
      return await productRepository.update(id, data);
    } catch (error) {
      if (error instanceof ZodError) {
        throw {
          status: 400,
          message: 'Erro de validação',
          issues: error.issues,
        };
      }
      throw error;
    }
  },

  delete: async (id: number) => {
    const exists = await productRepository.findById(id);
    if (!exists) {
      throw { status: 404, message: 'Produto não encontrado' };
    }
    return await productRepository.delete(id);
  },

  favorite: async (id: number, favorite?: boolean) => {
    const product = await productRepository.findById(id);
    if (!product){
        throw {status: 404, message: "Produto não encontrado"}
    }
    const newValue = favorite?? !product.favorite

    return await productRepository.update(id, {...product, favorite: newValue})
  },
};
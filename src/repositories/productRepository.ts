import {prisma} from "../lib/prisma"
import { productInput } from "../schema/productSchema"

export const productRepository = {
    create: async (data: productInput) => {
        return await prisma.product.create({ data })
    },

    findAll: async () => {
        return await prisma.product.findMany()
    },    

    findById: async (id: number) => {
        return await prisma.product.findUnique({ where: { id } })
    }, 

    update: async (id: number, data: productInput) =>{ 
        return await prisma.product.update({ where: { id }, data })
    },

    delete: async (id: number) => {
        return await prisma.product.delete({ where: { id } })
    },

    findFavorites: async () => {
        return await prisma.product.findMany({
            where: { favorite: true },
        });
    },
}
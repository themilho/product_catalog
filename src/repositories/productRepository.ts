import {prisma} from "../lib/prisma"
import { productInput } from "../schema/productSchema"

export const productRepository = {
    create: (data: productInput) => {prisma.product.create({ data })},

    findAll: () => prisma.product.findMany(),    

    findById: (id: number) => prisma.product.findUnique({ where: { id } }), 

    update: (id: number, data: productInput) => 
        prisma.product.update({ where: { id }, data }),

    delete: (id: number) => prisma.product.delete({ where: { id } })
}
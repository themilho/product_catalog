import {z} from "zod";

export const ProductSchema = z.object({
    name: z.string().min(1, "Name is required"), 
    description: z.string().optional(),
    price: z.number().positive(),
    category: z.string().min(1), 
    favorite: z.boolean().optional(),
    imageUrl: z.string().url().optional(),
});

export type productInput = z.infer<typeof ProductSchema>;
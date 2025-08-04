import {z} from "zod";

export const ProductSchema = z.object({
    name: z.string().min(1, "Name is required"), 
    description: z.string().optional(),
    price: z.number().positive(),
    category: z.string().min(1), 
    favorite: z.boolean().optional(),
    imageUrl: z.union([z.string().url(), z.literal("")]).optional(),
});

export type productInput = z.infer<typeof ProductSchema>;
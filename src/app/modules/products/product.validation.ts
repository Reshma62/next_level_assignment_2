import { z } from "zod";

const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventorySchema = z.object({
  quantity: z.number().positive(),
  inStock: z.boolean(),
});

const productSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  category: z.string().min(1),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantSchema).optional(),
  inventory: inventorySchema,
});

export const validateProduct = (data: unknown) => {
  return productSchema.parse(data);
};

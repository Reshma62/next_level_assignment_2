"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().positive(),
    inStock: zod_1.z.boolean(),
});
const productSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    price: zod_1.z.number().positive(),
    category: zod_1.z.string().min(1),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema,
});
const validateProduct = (data) => {
    return productSchema.parse(data);
};
exports.validateProduct = validateProduct;

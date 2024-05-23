"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: { type: String },
    value: { type: String },
});
const InventorySchema = new mongoose_1.Schema({
    quantity: { type: Number },
    inStock: { type: Boolean },
});
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Product name is required"] },
    description: { type: String },
    price: { type: Number, required: [true, "Product Price is required"] },
    category: { type: String, required: [true, "Product category is required"] },
    tags: [{ type: String }],
    variants: [VariantSchema],
    inventory: InventorySchema,
});
const Product = (0, mongoose_1.model)("Product", ProductSchema);
exports.default = Product;

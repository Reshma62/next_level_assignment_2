import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const VariantSchema: Schema = new Schema<IVariant>({
  type: { type: String },
  value: { type: String },
});

const InventorySchema: Schema = new Schema<IInventory>({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

const ProductSchema: Schema = new Schema<IProduct>({
  name: { type: String, required: [true, "Product name is required"] },
  description: { type: String },
  price: { type: Number, required: [true, "Product Price is required"] },
  category: { type: String, required: [true, "Product category is required"] },
  tags: [{ type: String }],
  variants: [VariantSchema],
  inventory: InventorySchema,
});

const Product = model("Product", ProductSchema);

export default Product;

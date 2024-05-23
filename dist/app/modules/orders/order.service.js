"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrdersService = exports.createOrderService = void 0;
const product_model_1 = __importDefault(require("../products/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrderService = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = order;
    const existsProduct = yield product_model_1.default.findOne({ _id: productId });
    if (!existsProduct) {
        throw new Error("Product not found");
    }
    if (existsProduct.inventory.quantity === 0) {
        yield product_model_1.default.findOneAndUpdate({ _id: productId }, { $set: { "inventory.inStock": false } }, { new: true });
        throw new Error("Out of stock");
    }
    if (existsProduct.inventory.quantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    const result = yield order_model_1.default.create(order);
    yield product_model_1.default.findOneAndUpdate({ _id: productId }, { $inc: { "inventory.quantity": -quantity } }, { new: true });
    return result;
});
exports.createOrderService = createOrderService;
// get all orders
const getAllOrdersService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // Use the find method with the query object
    const result = yield order_model_1.default.find(query).exec();
    if (result.length === 0) {
        throw new Error("Order not found");
    }
    return result;
});
exports.getAllOrdersService = getAllOrdersService;

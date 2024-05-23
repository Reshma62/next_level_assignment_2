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
exports.deleteProductByIdService = exports.updateProductByIdService = exports.getProductByIdService = exports.searchProductService = exports.createProductService = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProductService = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(product);
    return result;
});
exports.createProductService = createProductService;
// serach product with all product
const searchProductService = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let matchStage = {};
    if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const regexMatch = { $regex: lowerCaseSearchTerm, $options: "i" };
        matchStage = {
            $or: [
                { name: regexMatch },
                { description: regexMatch },
            ],
        };
    }
    const pipeline = [{ $match: matchStage }];
    const result = yield product_model_1.default.aggregate(pipeline).exec();
    return result;
});
exports.searchProductService = searchProductService;
const getProductByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result;
});
exports.getProductByIdService = getProductByIdService;
const updateProductByIdService = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(id, product, { new: true });
    return result;
});
exports.updateProductByIdService = updateProductByIdService;
const deleteProductByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.deleteProductByIdService = deleteProductByIdService;

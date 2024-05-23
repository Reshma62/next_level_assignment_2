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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductByIdController = exports.updateProductByIdController = exports.getProductByIdController = exports.searchProductController = exports.createProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
// create product
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // Validate the data
        const validatedData = (0, product_validation_1.validateProduct)(data);
        const product = yield (0, product_service_1.createProductService)(validatedData);
        res.status(200).json({
            success: true,
            message: "New product created successfully",
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Internal server error",
        });
    }
});
exports.createProductController = createProductController;
// get all products
// serach product
const searchProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const searchTerm = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.searchTerm;
        console.log(searchTerm, "searchTerm");
        const products = yield (0, product_service_1.searchProductService)(searchTerm);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Internal server error",
        });
    }
});
exports.searchProductController = searchProductController;
// get product by id
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield (0, product_service_1.getProductByIdService)(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Internal server error",
        });
    }
});
exports.getProductByIdController = getProductByIdController;
// get product by id
const updateProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = req.body;
        const product = yield (0, product_service_1.updateProductByIdService)(productId, data);
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Internal server error",
        });
    }
});
exports.updateProductByIdController = updateProductByIdController;
// delete product by id
const deleteProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield (0, product_service_1.deleteProductByIdService)(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: null,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Internal server error",
        });
    }
});
exports.deleteProductByIdController = deleteProductByIdController;

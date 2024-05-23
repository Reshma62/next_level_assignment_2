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
exports.getAllOrdersController = exports.createNewOrderController = void 0;
const order_validation_1 = __importDefault(require("./order.validation"));
const order_service_1 = require("./order.service");
const createNewOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const validateData = order_validation_1.default.parse(data);
        const newOrder = yield (0, order_service_1.createOrderService)(validateData);
        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: newOrder,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Internal server error",
        });
    }
});
exports.createNewOrderController = createNewOrderController;
// get all orders
const getAllOrdersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const getAllOrders = yield (0, order_service_1.getAllOrdersService)(query);
        res.status(200).json({
            success: true,
            message: "Get all orders successfully",
            data: getAllOrders,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Internal server error",
        });
    }
});
exports.getAllOrdersController = getAllOrdersController;

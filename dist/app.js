"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/products/product.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", product_route_1.ProductRoute);
app.use("/api", order_route_1.OrderRoute);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use((req, res, next) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URI,
};
exports.default = config;

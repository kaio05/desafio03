"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cars_route_1 = require("../../../cars/infraestructure/http/routes/cars.route");
const customer_route_1 = __importDefault(require("../../../modules/customer/infraestructure/http/routes/customer.route"));
const orders_route_1 = require("../../../orders/infrastructure/http/routes/orders.route");
const user_routes_1 = require("../../../users/infraestructure/http/routes/user.routes");
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.use('/users', user_routes_1.userRoutes);
routes.use('/cars', cars_route_1.carRoutes);
routes.use('/orders', orders_route_1.orderRoutes);
routes.use('/customers', customer_route_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map
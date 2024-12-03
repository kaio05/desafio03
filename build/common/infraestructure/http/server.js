"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const typeorm_1 = require("../typeorm");
const routes_1 = __importDefault(require("./routes"));
const app_error_1 = require("../../../common/domain/errors/app-error");
const celebrate_1 = require("celebrate");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.use((0, celebrate_1.errors)());
app.use((error, request, response, _next) => {
    if (error instanceof app_error_1.AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    console.log(error);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
typeorm_1.dataSource.initialize().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running');
    });
});
exports.default = app;
//# sourceMappingURL=server.js.map
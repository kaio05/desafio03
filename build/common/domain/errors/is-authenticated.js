"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isAuthenticated;
const app_error_1 = require("../errors/app-error");
function isAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new app_error_1.AppError('Token JWT está ausente.', 401);
    }
    const [, token] = authHeader.split(' ');
    try {
        return next();
    }
    catch (error) {
        throw new app_error_1.AppError('Token JWT inválido ou expirado.', 401);
    }
}
//# sourceMappingURL=is-authenticated.js.map
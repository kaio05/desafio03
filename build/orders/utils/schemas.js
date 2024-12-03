"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchemaJoi = exports.CarSchemaJoi = exports.CarSchemaZod = void 0;
const joi_1 = __importDefault(require("joi"));
const zod_1 = require("zod");
exports.CarSchemaZod = zod_1.z.object({
    id: zod_1.z.string(),
    licensePlate: zod_1.z.string(),
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    mileage: zod_1.z.union([zod_1.z.number(), zod_1.z.null()]),
    year: zod_1.z.number(),
    items: zod_1.z.array(zod_1.z.string()),
    price: zod_1.z.number(),
    registrationDate: zod_1.z.string(),
    status: zod_1.z.enum(['ativo', 'inativo', 'excluído']),
});
exports.CarSchemaJoi = joi_1.default.object({
    id: joi_1.default.string().uuid().required(),
    licensePlate: joi_1.default.string().required(),
    brand: joi_1.default.string().required(),
    model: joi_1.default.string().required(),
    mileage: joi_1.default.number().optional(),
    year: joi_1.default.number().required(),
    items: joi_1.default.array().items(joi_1.default.string()),
    price: joi_1.default.number().required(),
    registrationDate: joi_1.default.string().required(),
    status: joi_1.default.valid('ativo', 'inativo', 'excluído').required(),
});
exports.CustomerSchemaJoi = joi_1.default.object({
    id: joi_1.default.string().uuid().required(),
    fullName: joi_1.default.string().required(),
    dateBirth: joi_1.default.date().required(),
    email: joi_1.default.string().required(),
    cpf: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    registrationDate: joi_1.default.date().required(),
    deletionDate: joi_1.default.date().optional(),
});
//# sourceMappingURL=schemas.js.map
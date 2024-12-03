"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRoutes = void 0;
const express_1 = require("express");
const create_car_controller_1 = require("../controllers/create-car.controller");
const read_car_controller_1 = require("../controllers/read-car.controller");
const update_car_controller_1 = require("../controllers/update-car.controller");
const delete_car_controller_1 = require("../controllers/delete-car.controller");
const read_cars_controller_1 = require("../controllers/read-cars.controller");
const celebrate_1 = require("celebrate");
const is_authenticated_1 = __importDefault(require("../../../../common/domain/errors/is-authenticated"));
const CURRENT_YEAR = new Date().getFullYear() + 1;
const carRoutes = (0, express_1.Router)();
exports.carRoutes = carRoutes;
carRoutes.use(is_authenticated_1.default);
carRoutes.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        model: celebrate_1.Joi.string().required(),
        brand: celebrate_1.Joi.string().required(),
        year: celebrate_1.Joi.number()
            .integer()
            .min(CURRENT_YEAR - 11)
            .max(CURRENT_YEAR)
            .required(),
        licensePlate: celebrate_1.Joi.string()
            .length(8)
            .pattern(/^[A-Za-z]{3}-[0-9]{4}$/)
            .required(),
        mileage: celebrate_1.Joi.number().min(0).required(),
        items: celebrate_1.Joi.array().items(celebrate_1.Joi.string()).max(5).unique().required(),
        price: celebrate_1.Joi.number().positive().precision(2).required(),
        status: celebrate_1.Joi.string().valid('ativo', 'inativo').required(),
    },
}), (req, res, next) => {
    (0, create_car_controller_1.createCarController)(req, res, next);
});
carRoutes.get('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: {
        page: celebrate_1.Joi.number().positive().optional(),
        per_page: celebrate_1.Joi.number().positive().optional(),
        model: celebrate_1.Joi.string().optional(),
        brand: celebrate_1.Joi.string().optional(),
        untilYear: celebrate_1.Joi.number()
            .positive()
            .optional()
            .when('fromYear', {
            is: celebrate_1.Joi.number().positive().required(),
            then: celebrate_1.Joi.number().positive().greater(celebrate_1.Joi.ref('fromYear')),
        }),
        fromYear: celebrate_1.Joi.number().positive().optional(),
        minPrice: celebrate_1.Joi.number().precision(2).positive().optional(),
        maxPrice: celebrate_1.Joi.number()
            .precision(2)
            .positive()
            .optional()
            .when('minPrice', {
            is: celebrate_1.Joi.number().precision(2).required(),
            then: celebrate_1.Joi.number().greater(celebrate_1.Joi.ref('minPrice')),
        }),
        items: celebrate_1.Joi.array().items(celebrate_1.Joi.string()).max(5).unique().optional(),
        mileage: celebrate_1.Joi.number().min(0).optional(),
        licensePlateFinalDigits: celebrate_1.Joi.string()
            .length(4)
            .pattern(/^[0-9]{4}$/)
            .optional(),
        status: celebrate_1.Joi.string().valid('ativo', 'inativo').optional(),
        orderBy: celebrate_1.Joi.array()
            .items(celebrate_1.Joi.string().valid('mileage', 'year', 'price'))
            .max(3)
            .min(1)
            .unique()
            .optional(),
    },
}), (req, res, next) => {
    (0, read_cars_controller_1.readCarsController)(req, res, next);
});
carRoutes.get('/:id', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.PARAMS]: { id: celebrate_1.Joi.string().uuid().required() } }), (req, res, next) => {
    (0, read_car_controller_1.readCarController)(req, res, next);
});
carRoutes.patch('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: { id: celebrate_1.Joi.string().uuid().required() },
    [celebrate_1.Segments.BODY]: {
        model: celebrate_1.Joi.string().optional(),
        brand: celebrate_1.Joi.string().optional(),
        year: celebrate_1.Joi.number()
            .integer()
            .min(CURRENT_YEAR - 11)
            .max(CURRENT_YEAR)
            .optional(),
        licensePlate: celebrate_1.Joi.string()
            .length(8)
            .pattern(/^[A-Za-z]{3}-[0-9]{4}$/)
            .optional(),
        mileage: celebrate_1.Joi.number().min(0).optional(),
        items: celebrate_1.Joi.array().items(celebrate_1.Joi.string()).max(5).unique().optional(),
        price: celebrate_1.Joi.number().positive().precision(2).optional(),
        status: celebrate_1.Joi.string().valid('ativo', 'inativo').optional(),
    },
}), (req, res, next) => {
    (0, update_car_controller_1.updateCarController)(req, res, next);
});
carRoutes.delete('/:id', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.PARAMS]: { id: celebrate_1.Joi.string().uuid().required() } }), (req, res, next) => {
    (0, delete_car_controller_1.deleteCarController)(req, res, next);
});
//# sourceMappingURL=cars.route.js.map
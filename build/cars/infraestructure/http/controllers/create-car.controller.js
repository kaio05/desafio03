"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCarController = createCarController;
const create_car_usecase_1 = require("../../../../cars/usecases/create-car.usecase");
const cars_typeorm_repository_1 = require("../../typeorm/repositories/cars-typeorm.repository");
const typeorm_1 = require("../../../../common/infraestructure/typeorm");
const cars_entity_1 = require("../../typeorm/entities/cars.entity");
async function createCarController(req, res, next) {
    try {
        const { model, brand, year, mileage, status, licensePlate, items, price } = req.body;
        const createCarUseCase = new create_car_usecase_1.CreateCarUseCase(new cars_typeorm_repository_1.CarsTypeormRepository(typeorm_1.dataSource.getRepository(cars_entity_1.Car)));
        const newCar = await createCarUseCase.execute({
            model,
            brand,
            year,
            mileage,
            status,
            licensePlate,
            items,
            price,
        });
        return res.status(201).json(newCar);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=create-car.controller.js.map
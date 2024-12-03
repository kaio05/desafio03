"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCarController = readCarController;
const cars_typeorm_repository_1 = require("../../typeorm/repositories/cars-typeorm.repository");
const typeorm_1 = require("../../../../common/infraestructure/typeorm");
const cars_entity_1 = require("../../typeorm/entities/cars.entity");
const read_car_usecase_1 = require("../../../../cars/usecases/read-car.usecase");
async function readCarController(req, res, next) {
    try {
        const { id } = req.params;
        const readCarUseCase = new read_car_usecase_1.ReadCarUseCase(new cars_typeorm_repository_1.CarsTypeormRepository(typeorm_1.dataSource.getRepository(cars_entity_1.Car)));
        const car = await readCarUseCase.execute(id);
        return res.status(200).json(car);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=read-car.controller.js.map
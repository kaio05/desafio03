'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.readCarsController = readCarsController
const cars_typeorm_repository_1 = require('../../typeorm/repositories/cars-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const cars_entity_1 = require('../../typeorm/entities/cars.entity')
const read_cars_usecase_1 = require('../../../../cars/usecases/read-cars.usecase')
async function readCarsController(req, res, next) {
  try {
    const readCarsUseCase = new read_cars_usecase_1.ReadCarsUseCase(
      new cars_typeorm_repository_1.CarsTypeormRepository(
        typeorm_1.dataSource.getRepository(cars_entity_1.Car),
      ),
    )
    const cars = await readCarsUseCase.execute(req.query)
    return res.status(200).json(cars)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=read-cars.controller.js.map

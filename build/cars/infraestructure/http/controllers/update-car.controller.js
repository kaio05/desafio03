'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.updateCarController = updateCarController
const cars_typeorm_repository_1 = require('../../typeorm/repositories/cars-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm/index.js')
const cars_entity_1 = require('../../typeorm/entities/cars.entity')
const update_car_usecase_1 = require('../../../../cars/usecases/update-car.usecase')
async function updateCarController(req, res, next) {
  try {
    const updateCarUseCase = new update_car_usecase_1.UpdateCarUseCase(
      new cars_typeorm_repository_1.CarsTypeormRepository(
        typeorm_1.dataSource.getRepository(cars_entity_1.Car),
      ),
    )
    const { id } = req.params
    const updatedCar = await updateCarUseCase.execute(id, req.body)
    return res.status(200).json(updatedCar)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=update-car.controller.js.map

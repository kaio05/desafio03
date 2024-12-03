'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deleteCarController = deleteCarController
const cars_typeorm_repository_1 = require('../../typeorm/repositories/cars-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const cars_entity_1 = require('../../typeorm/entities/cars.entity')
const delete_car_usecase_1 = require('../../../../cars/usecases/delete-car.usecase')
const orders_typeorm_repository_1 = require('../../../../orders/infrastructure/typeorm/repositories/orders-typeorm.repository')
const orders_entity_1 = require('../../../../orders/infrastructure/typeorm/entities/orders.entity')
async function deleteCarController(req, res, next) {
  try {
    const { id } = req.params
    const deleteCarUseCase = new delete_car_usecase_1.DeleteCarUseCase(
      new cars_typeorm_repository_1.CarsTypeormRepository(
        typeorm_1.dataSource.getRepository(cars_entity_1.Car),
      ),
      new orders_typeorm_repository_1.OrdersTypeormRepository(
        typeorm_1.dataSource.getRepository(orders_entity_1.Order),
      ),
    )
    const deletedCar = await deleteCarUseCase.execute(id)
    return res.status(200).json(deletedCar)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=delete-car.controller.js.map

'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.DeleteCarUseCase = void 0
const app_error_1 = require('../../common/domain/errors/app-error')
class DeleteCarUseCase {
  carRepository
  orderRepository
  constructor(carRepository, orderRepository) {
    this.carRepository = carRepository
    this.orderRepository = orderRepository
  }
  async execute(id) {
    const carExists = await this.carRepository.findById(id)
    if (!carExists) {
      throw new app_error_1.AppError("Car don't exist", 404)
    }
    const order = await this.orderRepository.findWithCar(carExists.id)
    if (order && order.status === 'Aberto')
      throw new app_error_1.AppError('Car has a open order', 409)
    carExists.status = 'excluído'
    const deletedCar = await this.carRepository.delete(carExists)
    const itemsName = deletedCar.items.map((item) => item.name)
    return { ...deletedCar, items: itemsName }
  }
}
exports.DeleteCarUseCase = DeleteCarUseCase
//# sourceMappingURL=delete-car.usecase.js.map

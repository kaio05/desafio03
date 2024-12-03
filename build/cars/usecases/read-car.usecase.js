'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ReadCarUseCase = void 0
const app_error_1 = require('../../common/domain/errors/app-error')
class ReadCarUseCase {
  carRepository
  constructor(carRepository) {
    this.carRepository = carRepository
  }
  async execute(id) {
    const car = await this.carRepository.findById(id)
    if (!car) throw new app_error_1.AppError("Car don't exist!", 404)
    const itemsName = car.items.map((item) => item.name)
    return { ...car, items: itemsName }
  }
}
exports.ReadCarUseCase = ReadCarUseCase
//# sourceMappingURL=read-car.usecase.js.map

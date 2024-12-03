'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpdateCarUseCase = void 0
const typeorm_1 = require('../../common/infraestructure/typeorm')
const items_entity_1 = require('../infraestructure/typeorm/entities/items.entity')
const app_error_1 = require('../../common/domain/errors/app-error')
class UpdateCarUseCase {
  carRepository
  constructor(carRepository) {
    this.carRepository = carRepository
  }
  async execute(
    id,
    { model, brand, year, licensePlate, items, status, mileage, price },
  ) {
    const carExists = await this.carRepository.findById(id)
    if (!carExists) {
      throw new app_error_1.AppError("Car don't exist", 404)
    }
    if (carExists.status === 'excluído')
      throw new app_error_1.AppError(
        "Isn't possible to update excluded cars",
        403,
      )
    if (licensePlate) {
      const duplicatedCar =
        await this.carRepository.findByLicensePlate(licensePlate)
      if (duplicatedCar && duplicatedCar.id !== carExists.id) {
        throw new app_error_1.AppError('Car already exists!', 409)
      }
    }
    let itemsNames = []
    if (items) {
      const itemsRepository = typeorm_1.dataSource.getRepository(
        items_entity_1.Item,
      )
      itemsNames = items.map((item) => {
        let id
        const car = carExists
        if (carExists.items.length > 0) {
          const item = carExists.items.shift()
          id = item.id
        }
        return { name: item, id, car }
      })
      await Promise.all(
        carExists.items.map(async (item) => {
          await itemsRepository.delete({ id: item.id })
        }),
      )
    }
    const car = {
      id: carExists.id,
      registrationDate: carExists.registrationDate,
      model: !model ? carExists.model : model,
      brand: !brand ? carExists.brand : brand,
      mileage: !mileage ? carExists.mileage : mileage,
      year: !year ? carExists.year : year,
      price: !price ? carExists.price : price,
      status: !status ? carExists.status : status,
      items: !items ? carExists.items : itemsNames,
      licensePlate: !licensePlate ? carExists.licensePlate : licensePlate,
    }
    const updatedCar = await this.carRepository.update(car)
    itemsNames = updatedCar.items.map((item) => item.name)
    return { ...updatedCar, items: itemsNames }
  }
}
exports.UpdateCarUseCase = UpdateCarUseCase
//# sourceMappingURL=update-car.usecase.js.map

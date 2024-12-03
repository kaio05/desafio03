'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpdateOrderUseCase = void 0
const app_error_1 = require('../../../common/domain/errors/app-error')
const ufUnion_1 = require('../../../orders/utils/ufUnion')
class UpdateOrderUseCase {
  orderRepository
  constructor(orderRepository) {
    this.orderRepository = orderRepository
  }
  async execute(
    id,
    { cep, total, initialDate, finalDate, cancelDate, status },
  ) {
    const orderExists = await this.orderRepository.findById(id)
    if (!orderExists) {
      throw new app_error_1.AppError('Order does not exist', 404)
    }
    if (initialDate && new Date(initialDate) < new Date(Date.now())) {
      throw new app_error_1.AppError(
        "Initial date can't be less then the current date",
        400,
      )
    }
    if (
      initialDate &&
      finalDate &&
      new Date(finalDate) < new Date(initialDate)
    ) {
      throw new app_error_1.AppError(
        "Final date can't be less then the initial date",
        400,
      )
    }
    if (!initialDate) {
      const initialDate = orderExists.initialDate
      if (finalDate && new Date(finalDate) < new Date(initialDate)) {
        throw new app_error_1.AppError(
          "Final date can't be less then the initial date",
          400,
        )
      }
    }
    let uf
    let city
    if (cep) {
      const cepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await cepResponse.json()
      if (data.erro) {
        throw new app_error_1.AppError('This CEP does not exist', 400)
      }
      if (!data) {
        throw new app_error_1.AppError('Failed to search for CEP', 404)
      }
      if (!(0, ufUnion_1.isValidUF)(data.uf)) {
        throw new app_error_1.AppError(
          'No momento não temos filiais nessa região',
          400,
        )
      }
      uf = data.uf
      city = data.localidade
    }
    switch (status) {
      case 'Aprovado':
        if (
          orderExists.status == 'Cancelado' ||
          !(cep && total && initialDate && finalDate && !cancelDate)
        )
          throw new app_error_1.AppError(
            "Order is cancelled or has a null field or a 'cancelDate' field",
            400,
          )
        break
      case 'Aberto':
        if (orderExists.status == 'Cancelado')
          throw new app_error_1.AppError('Order is already cancelled', 400)
        if (orderExists.status == 'Aprovado')
          throw new app_error_1.AppError('Order is already approved', 400)
        break
      case 'Cancelado':
        if (orderExists.status == 'Aprovado' || !cancelDate)
          throw new app_error_1.AppError(
            "Order is approved or misses a 'cancelDate' field",
            400,
          )
        break
    }
    const order = {
      id: orderExists.id,
      cep: !cep ? orderExists.cep : cep,
      city: !cep ? orderExists.city : city,
      total: !total ? orderExists.total : total,
      initialDate: !initialDate ? orderExists.initialDate : initialDate,
      finalDate:
        finalDate && status == 'Cancelado' ? finalDate : orderExists.finalDate,
      status: !status ? orderExists.status : status,
      uf: !cep ? orderExists.uf : uf,
      cancelDate: !cancelDate ? orderExists.cancelDate : cancelDate,
      car: orderExists.car,
    }
    const updatedOrder = await this.orderRepository.update(order)
    return updatedOrder
  }
}
exports.UpdateOrderUseCase = UpdateOrderUseCase
//# sourceMappingURL=update-order.usecase.js.map

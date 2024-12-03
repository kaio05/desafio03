'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.DeleteOrderUseCase = void 0
const app_error_1 = require('../../../common/domain/errors/app-error')
class DeleteOrderUseCase {
  orderRepository
  constructor(orderRepository) {
    this.orderRepository = orderRepository
  }
  async execute(id) {
    const orderExists = await this.orderRepository.findById(id)
    if (!orderExists) {
      throw new app_error_1.AppError('Order does not exist', 404)
    }
    if (orderExists.status !== 'Aberto') {
      throw new app_error_1.AppError('Order is not open', 400)
    }
    orderExists.status = 'Cancelado'
    orderExists.cancelDate = new Date(Date.now())
    await this.orderRepository.update(orderExists)
  }
}
exports.DeleteOrderUseCase = DeleteOrderUseCase
//# sourceMappingURL=delete-order.usecase.js.map

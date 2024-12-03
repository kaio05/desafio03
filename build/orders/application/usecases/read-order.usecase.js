'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ReadOrderUseCase = void 0
const app_error_1 = require('../../../common/domain/errors/app-error')
class ReadOrderUseCase {
  orderRepository
  constructor(orderRepository) {
    this.orderRepository = orderRepository
  }
  async execute(id) {
    const order = await this.orderRepository.findById(id)
    if (!order) throw new app_error_1.AppError('Order does not exist', 400)
    return order
  }
}
exports.ReadOrderUseCase = ReadOrderUseCase
//# sourceMappingURL=read-order.usecase.js.map

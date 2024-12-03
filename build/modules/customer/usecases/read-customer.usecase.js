'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ReadCustomerUseCase = void 0
const app_error_1 = require('../../../common/domain/errors/app-error')
class ReadCustomerUseCase {
  customerRepository
  constructor(customerRepository) {
    this.customerRepository = customerRepository
  }
  async execute(id) {
    const customer = await this.customerRepository.findByID(id)
    if (!customer) throw new app_error_1.AppError('Customer dont exist', 404)
    return customer
  }
}
exports.ReadCustomerUseCase = ReadCustomerUseCase
//# sourceMappingURL=read-customer.usecase.js.map

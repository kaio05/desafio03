'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpdateCustomerUseCase = void 0
const app_error_1 = require('../../../common/domain/errors/app-error')
class UpdateCustomerUseCase {
  customerRepository
  constructor(customerRepository) {
    this.customerRepository = customerRepository
  }
  async execute(input) {
    const customer = await this.customerRepository.findByID(input.id)
    if (!customer) {
      if (customer.deleted_at)
        throw new app_error_1.AppError('Customer not found', 404)
    }
    if (input.email && input.email !== customer.email) {
      const duplicatedEmail = await this.customerRepository.findByEmail(
        input.email,
      )
      const duplicatedCpf = await this.customerRepository.findByCPF(input.cpf)
      if (duplicatedCpf) {
        if (duplicatedCpf.id !== customer.id) {
          throw new app_error_1.AppError('Costumer already exist', 409)
        }
      }
      if (duplicatedEmail) {
        if (duplicatedEmail.id !== customer.id) {
          throw new app_error_1.AppError('Costumer already exist', 409)
        }
      }
    }
    const updatedData = {
      ...customer,
      fullName: input.fullName ?? customer.fullName,
      email: input.email ?? customer.email,
    }
    const updatedCustomer = await this.customerRepository.update(updatedData)
    if (!updatedCustomer) {
      throw new app_error_1.AppError('Internal server error', 500)
    }
    return updatedCustomer
  }
}
exports.UpdateCustomerUseCase = UpdateCustomerUseCase
//# sourceMappingURL=update-customer.usecase.js.map

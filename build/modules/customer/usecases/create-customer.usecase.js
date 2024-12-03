'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreateCustomerUseCase = void 0
const app_error_1 = require('../../../common/domain/errors/app-error')
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false
  }
  let soma = 0
  let resto
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i)
  }
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) {
    resto = 0
  }
  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false
  }
  soma = 0
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i)
  }
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) {
    resto = 0
  }
  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false
  }
  return true
}
class CreateCustomerUseCase {
  customerRepository
  constructor(customerRepository) {
    this.customerRepository = customerRepository
  }
  async execute(input) {
    if (!validarCPF(input.cpf)) {
      throw new app_error_1.AppError('CPF inválido', 404)
    }
    const customerExists =
      (await this.customerRepository.findByCPF(input.cpf)) ||
      (await this.customerRepository.findByEmail(input.email))
    if (customerExists) {
      if (!customerExists.deleted_at)
        throw new app_error_1.AppError('Customer already exist', 409)
    }
    const newCustomer = await this.customerRepository.create({
      deleted_at: null,
      ...input,
    })
    await this.customerRepository.insert(newCustomer)
    return newCustomer
  }
}
exports.CreateCustomerUseCase = CreateCustomerUseCase
//# sourceMappingURL=create-customer.usecase.js.map

'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.CreateOrderUseCase = void 0
const app_error_1 = require('../../../common/domain/errors/app-error')
var CreateOrderUseCase
;(function (CreateOrderUseCase) {
  class UseCase {
    orderRepository
    customerRepository
    carRepository
    constructor(orderRepository, customerRepository, carRepository) {
      this.orderRepository = orderRepository
      this.customerRepository = customerRepository
      this.carRepository = carRepository
    }
    async execute(input) {
      if (!input.carId || !input.customerId) {
        throw new app_error_1.AppError(
          'Input data not provided or invalid',
          400,
        )
      }
      const customerExists = await this.customerRepository.findByID(
        input.customerId,
      )
      if (!customerExists)
        throw new app_error_1.AppError('Customer does not exist', 404)
      const carExists = await this.carRepository.findById(input.carId)
      if (!carExists) throw new app_error_1.AppError('Car does not exist', 404)
      const existingOrder = await this.orderRepository.findWithCustomer(
        input.customerId,
      )
      if (existingOrder)
        throw new app_error_1.AppError('Order already exists', 400)
      const status = 'Aberto'
      const order = {
        ...input,
        car: {
          ...carExists,
          items: carExists.items.map((item) => {
            return item
          }),
        },
        customer: customerExists,
        status: status,
      }
      const orderInst = this.orderRepository.create(order)
      await this.orderRepository.insert(orderInst)
      return {
        id: orderInst.id,
        cep: orderInst.cep,
        city: orderInst.city,
        total: orderInst.total,
        initialDate: orderInst.initialDate,
        finalDate: orderInst.finalDate,
        cancelDate: orderInst.cancelDate,
        customerCpf: order.customer.cpf,
        carId: order.car.id,
        status: orderInst.status,
        uf: orderInst.uf,
      }
    }
  }
  CreateOrderUseCase.UseCase = UseCase
})(CreateOrderUseCase || (exports.CreateOrderUseCase = CreateOrderUseCase = {}))
//# sourceMappingURL=create-order.usecase.js.map

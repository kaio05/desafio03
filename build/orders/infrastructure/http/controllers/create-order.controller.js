'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.createOrderController = createOrderController
const orders_typeorm_repository_1 = require('../../typeorm/repositories/orders-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const orders_entity_1 = require('../../typeorm/entities/orders.entity')
const create_order_usecase_1 = require('../../../../orders/application/usecases/create-order.usecase')
const cars_typeorm_repository_1 = require('../../../../cars/infraestructure/typeorm/repositories/cars-typeorm.repository')
const cars_entity_1 = require('../../../../cars/infraestructure/typeorm/entities/cars.entity')
const customer_entity_1 = __importDefault(
  require('../../../../modules/customer/infraestructure/typeorm/entities/customer.entity'),
)
const customers_typeorm_repository_1 = require('../../../../modules/customer/infraestructure/typeorm/repositories/customers.typeorm.repository')
async function createOrderController(request, response, next) {
  try {
    const { carId, customerId } = request.body
    const createOrderUseCase =
      new create_order_usecase_1.CreateOrderUseCase.UseCase(
        new orders_typeorm_repository_1.OrdersTypeormRepository(
          typeorm_1.dataSource.getRepository(orders_entity_1.Order),
        ),
        new customers_typeorm_repository_1.CustomersTypeormRepository(
          typeorm_1.dataSource.getRepository(customer_entity_1.default),
        ),
        new cars_typeorm_repository_1.CarsTypeormRepository(
          typeorm_1.dataSource.getRepository(cars_entity_1.Car),
        ),
      )
    const order = await createOrderUseCase.execute({
      carId,
      customerId,
    })
    return response.status(201).json(order)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=create-order.controller.js.map

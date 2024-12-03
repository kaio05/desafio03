'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.createCustomerController = createCustomerController
const typeorm_1 = require('../../../../../common/infraestructure/typeorm')
const create_customer_usecase_1 = require('../../../../../modules/customer/usecases/create-customer.usecase')
const customer_entity_1 = __importDefault(
  require('../../typeorm/entities/customer.entity'),
)
const customers_typeorm_repository_1 = require('../../typeorm/repositories/customers.typeorm.repository')
async function createCustomerController(req, res, next) {
  try {
    const { fullName, dateBirth, email, cpf, phone } = req.body
    const createCarUseCase =
      new create_customer_usecase_1.CreateCustomerUseCase(
        new customers_typeorm_repository_1.CustomersTypeormRepository(
          typeorm_1.dataSource.getRepository(customer_entity_1.default),
        ),
      )
    const newCustomer = await createCarUseCase.execute({
      fullName,
      dateBirth,
      email,
      cpf,
      phone,
    })
    return res.status(201).json(newCustomer)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=create-customer.controller.js.map

'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.readCustomerController = readCustomerController
const typeorm_1 = require('../../../../../common/infraestructure/typeorm')
const customer_entity_1 = __importDefault(
  require('../../typeorm/entities/customer.entity'),
)
const customers_typeorm_repository_1 = require('../../typeorm/repositories/customers.typeorm.repository')
const read_customer_usecase_1 = require('../../../../../modules/customer/usecases/read-customer.usecase')
async function readCustomerController(req, res, next) {
  try {
    const { id } = req.params
    const readCarUseCase = new read_customer_usecase_1.ReadCustomerUseCase(
      new customers_typeorm_repository_1.CustomersTypeormRepository(
        typeorm_1.dataSource.getRepository(customer_entity_1.default),
      ),
    )
    const customer = await readCarUseCase.execute(id)
    return res.status(200).json(customer)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=read-costumer.controller.js.map

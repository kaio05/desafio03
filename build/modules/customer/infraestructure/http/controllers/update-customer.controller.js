'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.updateCustomerController = updateCustomerController
const typeorm_1 = require('../../../../../common/infraestructure/typeorm')
const customer_entity_1 = __importDefault(
  require('../../typeorm/entities/customer.entity'),
)
const customers_typeorm_repository_1 = require('../../typeorm/repositories/customers.typeorm.repository')
const update_customer_usecase_1 = require('../../../../../modules/customer/usecases/update-customer.usecase')
async function updateCustomerController(req, res, next) {
  try {
    const { fullName, dateBirth, email, cpf, phone } = req.body
    const { id } = req.params
    const updateCarUseCase =
      new update_customer_usecase_1.UpdateCustomerUseCase(
        new customers_typeorm_repository_1.CustomersTypeormRepository(
          typeorm_1.dataSource.getRepository(customer_entity_1.default),
        ),
      )
    const updatedCustomer = await updateCarUseCase.execute({
      id,
      fullName,
      dateBirth,
      email,
      cpf,
      phone,
    })
    return res.status(200).json(updatedCustomer)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=update-customer.controller.js.map

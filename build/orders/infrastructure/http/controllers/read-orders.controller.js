'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.readOrdersController = readOrdersController
const read_orders_usecase_1 = require('../../../../orders/application/usecases/read-orders-usecase')
const orders_typeorm_repository_1 = require('../../typeorm/repositories/orders-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const orders_entity_1 = require('../../typeorm/entities/orders.entity')
async function readOrdersController(req, res, next) {
  try {
    const readOrdersUseCase = new read_orders_usecase_1.ReadOrdersUseCase(
      new orders_typeorm_repository_1.OrdersTypeormRepository(
        typeorm_1.dataSource.getRepository(orders_entity_1.Order),
      ),
    )
    const orders = await readOrdersUseCase.execute(req.query)
    if (orders.data.length == 0) return res.status(204).send()
    return res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=read-orders.controller.js.map

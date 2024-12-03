'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.readOrderController = readOrderController
const read_order_usecase_1 = require('../../../../orders/application/usecases/read-order.usecase')
const orders_typeorm_repository_1 = require('../../typeorm/repositories/orders-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const orders_entity_1 = require('../../typeorm/entities/orders.entity')
async function readOrderController(req, res, next) {
  {
    try {
      const { id } = req.params
      const readOrderUseCase = new read_order_usecase_1.ReadOrderUseCase(
        new orders_typeorm_repository_1.OrdersTypeormRepository(
          typeorm_1.dataSource.getRepository(orders_entity_1.Order),
        ),
      )
      const order = await readOrderUseCase.execute(id)
      return res.status(200).json(order)
    } catch (err) {
      next(err)
    }
  }
}
//# sourceMappingURL=read-order.controller.js.map

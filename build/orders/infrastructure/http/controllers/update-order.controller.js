'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.updateOrderController = updateOrderController
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const orders_typeorm_repository_1 = require('../../typeorm/repositories/orders-typeorm.repository')
const update_order_usecase_1 = require('../../../../orders/application/usecases/update-order.usecase')
const orders_entity_1 = require('../../typeorm/entities/orders.entity')
async function updateOrderController(req, res, next) {
  try {
    const updateOrderUseCase = new update_order_usecase_1.UpdateOrderUseCase(
      new orders_typeorm_repository_1.OrdersTypeormRepository(
        typeorm_1.dataSource.getRepository(orders_entity_1.Order),
      ),
    )
    const { id } = req.params
    await updateOrderUseCase.execute(id, req.body)
    return res.status(204).send()
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=update-order.controller.js.map

'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deleteOrderController = deleteOrderController
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const delete_order_usecase_1 = require('../../../../orders/application/usecases/delete-order.usecase')
const orders_typeorm_repository_1 = require('../../typeorm/repositories/orders-typeorm.repository')
const orders_entity_1 = require('../../typeorm/entities/orders.entity')
async function deleteOrderController(req, res, next) {
  try {
    const { id } = req.params
    const deleteOrderUseCase = new delete_order_usecase_1.DeleteOrderUseCase(
      new orders_typeorm_repository_1.OrdersTypeormRepository(
        typeorm_1.dataSource.getRepository(orders_entity_1.Order),
      ),
    )
    await deleteOrderUseCase.execute(id)
    return res.status(204).send()
  } catch (err) {
    next(err)
  }
}
//# sourceMappingURL=delete-order.controller.js.map

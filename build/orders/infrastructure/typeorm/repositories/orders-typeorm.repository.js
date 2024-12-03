'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.OrdersTypeormRepository = void 0
const typeorm_1 = require('typeorm')
const app_error_1 = require('../../../../common/domain/errors/app-error')
class OrdersTypeormRepository {
  ordersRepository
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository
  }
  async findAllAndFilter(params) {
    const {
      page,
      per_page,
      cep,
      city,
      total,
      initialDate,
      finalDate,
      cancelDate,
      status,
      uf,
    } = params
    const options = {}
    if (cep) options.cep = cep
    if (city) options.city = city
    if (total) options.total = total
    if (cancelDate) options.cancelDate = cancelDate
    if (uf) options.uf = uf
    if (finalDate && initialDate) {
      options.initialDate = (0, typeorm_1.Between)(initialDate, finalDate)
      options.finalDate = (0, typeorm_1.Between)(initialDate, finalDate)
    } else {
      if (initialDate) {
        options.initialDate = (0, typeorm_1.MoreThanOrEqual)(initialDate)
      }
      if (finalDate) {
        options.finalDate = (0, typeorm_1.LessThanOrEqual)(finalDate)
      }
    }
    options.status = status
      ? (0, typeorm_1.In)([status])
      : (0, typeorm_1.In)(['Aberto', 'Aprovado', 'Cancelado'])
    let take = 0
    let skip = 0
    take = per_page ? per_page : 10
    skip = page ? (page - 1) * take : 0
    const [data, count] = await this.ordersRepository.findAndCount({
      where: { ...options },
      relations: ['car', 'customer'],
      skip,
      take,
    })
    if (!data) throw new app_error_1.AppError('Order not found', 404)
    const ids = data.map((order) => order.id)
    const orders = await this.ordersRepository.find({
      where: { id: (0, typeorm_1.In)(ids) },
      relations: ['car', 'customer'],
    })
    return {
      per_page: take,
      page: page ? page : 1,
      count: count,
      data: orders,
    }
  }
  create(props) {
    return this.ordersRepository.create(props)
  }
  async insert(model) {
    return await this.ordersRepository.save(model)
  }
  async findWithRelations(id, ...relations) {
    const order = await this.ordersRepository.findOne({
      where: { id: id },
      relations: [...relations],
    })
    console.log(order)
    if (!order) throw new Error(`Order not found using id ${id}`)
    return order
  }
  async findById(id) {
    return await this.ordersRepository.findOne({
      where: { id: id },
      relations: { customer: true, car: true },
    })
  }
  async findWithCustomer(id) {
    return await this.ordersRepository.findOne({
      where: { customer: { id: id } },
      relations: ['customer'],
    })
  }
  async update(model) {
    await this.findById(model.id)
    await this.ordersRepository.update({ id: model.id }, model)
    return model
  }
  async delete(model) {
    await this.findById(model.id)
    await this.ordersRepository.delete(model.id)
    return model
  }
}
exports.OrdersTypeormRepository = OrdersTypeormRepository
//# sourceMappingURL=orders-typeorm.repository.js.map

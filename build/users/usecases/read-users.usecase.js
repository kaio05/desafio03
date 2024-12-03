'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ListUsersUseCase = void 0
const app_error_1 = require('../../common/domain/errors/app-error')
class ListUsersUseCase {
  userRepository
  constructor(userRepository) {
    this.userRepository = userRepository
  }
  async execute(input) {
    const { filters, orderBy, pagination } = input
    try {
      const { users, total } = await this.userRepository.findAllWithFilters(
        filters,
        orderBy,
        pagination,
      )
      const perPage = pagination?.perPage || 10
      const pages = Math.ceil(total / perPage)
      return { users, total, pages }
    } catch (error) {
      throw new app_error_1.AppError('Erro ao listar usuários', 500)
    }
  }
}
exports.ListUsersUseCase = ListUsersUseCase
//# sourceMappingURL=read-users.usecase.js.map

'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.GetUserByIdUseCase = void 0
const app_error_1 = require('../../common/domain/errors/app-error')
class GetUserByIdUseCase {
  userRepository
  constructor(userRepository) {
    this.userRepository = userRepository
  }
  async execute(id) {
    const user = await this.userRepository.findByID(id)
    if (!user) {
      throw new app_error_1.AppError('Usuário não encontrado', 404)
    }
    return user
  }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase
//# sourceMappingURL=read-single-user.usecase.js.map

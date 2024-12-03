'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.DeleteUserUseCase = void 0
const app_error_1 = require('../../common/domain/errors/app-error')
class DeleteUserUseCase {
  userRepository
  constructor(userRepository) {
    this.userRepository = userRepository
  }
  async execute(id) {
    const userExists = await this.userRepository.findByID(id)
    if (!userExists) {
      throw new app_error_1.AppError('Usuário não existe', 404)
    }
    if (userExists.deletionDate) {
      throw new app_error_1.AppError('Usuário já foi deletado', 400)
    }
    userExists.deletionDate = new Date()
    const deletedUser = await this.userRepository.update(userExists)
    return deletedUser
  }
}
exports.DeleteUserUseCase = DeleteUserUseCase
//# sourceMappingURL=delete-user.usecase.js.map

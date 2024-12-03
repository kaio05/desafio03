'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.UpdateUserUseCase = void 0
const app_error_1 = require('../../common/domain/errors/app-error')
const bcrypt_1 = __importDefault(require('bcrypt'))
class UpdateUserUseCase {
  userRepository
  constructor(userRepository) {
    this.userRepository = userRepository
  }
  async execute(input) {
    const user = await this.userRepository.findByID(input.id)
    if (!user || user.deletionDate) {
      throw new app_error_1.AppError('Usuário inexistente ou já removido', 404)
    }
    if (input.email && input.email !== user.email) {
      const duplicatedEmail = await this.userRepository.findByEmail(input.email)
      if (duplicatedEmail && duplicatedEmail.id !== user.id) {
        throw new app_error_1.AppError('Email já cadastrado', 409)
      }
    }
    let hashedPassword = user.password
    if (input.password) {
      hashedPassword = await bcrypt_1.default.hash(input.password, 10)
    }
    const updatedData = {
      ...user,
      fullName: input.fullName ?? user.fullName,
      email: input.email ?? user.email,
      password: hashedPassword,
    }
    const updatedUser = await this.userRepository.update(updatedData)
    if (!updatedUser) {
      throw new app_error_1.AppError('Erro ao atualizar usuário', 500)
    }
    return {
      id: updatedUser.id,
      fullName: updatedUser.fullName,
      email: updatedUser.email,
    }
  }
}
exports.UpdateUserUseCase = UpdateUserUseCase
//# sourceMappingURL=update-user.usecase.js.map

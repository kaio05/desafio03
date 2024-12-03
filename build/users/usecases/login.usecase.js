'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.LoginUserUseCase = void 0
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'))
const bcrypt_1 = __importDefault(require('bcrypt'))
const app_error_1 = require('../../common/domain/errors/app-error')
class LoginUserUseCase {
  userRepository
  constructor(userRepository) {
    this.userRepository = userRepository
  }
  async execute(input) {
    const user = await this.userRepository.findByEmail(input.email)
    if (!user) {
      throw new app_error_1.AppError('Usuário não encontrado', 404)
    }
    const isPasswordValid = await bcrypt_1.default.compare(
      input.password,
      user.password,
    )
    if (!isPasswordValid) {
      throw new app_error_1.AppError('Senha incorreta', 401)
    }
    const token = this.generateToken(user.id)
    return {
      id: user.id,
      name: user.full_name,
      email: user.email,
      token,
    }
  }
  generateToken(userId) {
    const secret = process.env.JWT_SECRET || 'secret'
    const expiresIn = '10m'
    if (!secret) {
      throw new app_error_1.AppError('Não pegou a chave do .env', 500)
    }
    return jsonwebtoken_1.default.sign({ id: userId }, secret, { expiresIn })
  }
}
exports.LoginUserUseCase = LoginUserUseCase
//# sourceMappingURL=login.usecase.js.map

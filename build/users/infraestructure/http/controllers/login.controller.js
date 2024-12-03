'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.loginUserController = loginUserController
const login_usecase_1 = require('../../../../users/usecases/login.usecase')
const users_typeorm_repository_1 = require('../../typeorm/repositories/users-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const users_entity_1 = require('../../typeorm/entities/users.entity')
async function loginUserController(req, res, next) {
  const { email, password } = req.body
  const loginUserUseCase = new login_usecase_1.LoginUserUseCase(
    new users_typeorm_repository_1.UsersTypeormRepository(
      typeorm_1.dataSource.getRepository(users_entity_1.User),
    ),
  )
  try {
    const loggedInUser = await loginUserUseCase.execute({ email, password })
    return res.status(200).json(loggedInUser)
  } catch (error) {
    next(error)
  }
}
//# sourceMappingURL=login.controller.js.map

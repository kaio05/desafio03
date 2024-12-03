'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.createUserController = createUserController
const create_user_usecase_1 = require('../../../../users/usecases/create-user.usecase')
const users_typeorm_repository_1 = require('../../typeorm/repositories/users-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const users_entity_1 = require('../../typeorm/entities/users.entity')
async function createUserController(req, res, next) {
  const { fullName, email, password } = req.body
  const createUserUseCase = new create_user_usecase_1.CreateUserUseCase(
    new users_typeorm_repository_1.UsersTypeormRepository(
      typeorm_1.dataSource.getRepository(users_entity_1.User),
    ),
  )
  try {
    const newUser = await createUserUseCase.execute({
      fullName,
      email,
      password,
    })
    return res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}
//# sourceMappingURL=create-user.controllers.js.map

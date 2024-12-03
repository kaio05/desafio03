'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.updateUserController = updateUserController
const update_user_usecase_1 = require('../../../../users/usecases/update-user.usecase')
const users_typeorm_repository_1 = require('../../typeorm/repositories/users-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const users_entity_1 = require('../../typeorm/entities/users.entity')
async function updateUserController(req, res, next) {
  const { id } = req.params
  const { fullName, email, password } = req.body
  const updateUserUseCase = new update_user_usecase_1.UpdateUserUseCase(
    new users_typeorm_repository_1.UsersTypeormRepository(
      typeorm_1.dataSource.getRepository(users_entity_1.User),
    ),
  )
  try {
    const updatedUser = await updateUserUseCase.execute({
      id,
      fullName,
      email,
      password,
    })
    return res.status(200).json(updatedUser)
  } catch (error) {
    next(error)
  }
}
//# sourceMappingURL=update-user.controller.js.map

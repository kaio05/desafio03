'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getUserByIdController = getUserByIdController
const read_single_user_usecase_1 = require('../../../../users/usecases/read-single-user.usecase')
const users_typeorm_repository_1 = require('../../../../users/infraestructure/typeorm/repositories/users-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const users_entity_1 = require('../../../../users/infraestructure/typeorm/entities/users.entity')
async function getUserByIdController(req, res, next) {
  const { id } = req.params
  const getUserByIdUseCase = new read_single_user_usecase_1.GetUserByIdUseCase(
    new users_typeorm_repository_1.UsersTypeormRepository(
      typeorm_1.dataSource.getRepository(users_entity_1.User),
    ),
  )
  try {
    const user = await getUserByIdUseCase.execute(id)
    return res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}
//# sourceMappingURL=read-single-user.controller.js.map

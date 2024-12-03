'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.deleteUserController = deleteUserController
const users_typeorm_repository_1 = require('../../../../users/infraestructure/typeorm/repositories/users-typeorm.repository')
const users_entity_1 = require('../../typeorm/entities/users.entity')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const delete_user_usecase_1 = require('../../../../users/usecases/delete-user.usecase')
async function deleteUserController(req, res, next) {
  try {
    const { id } = req.params
    const deleteUserUseCase = new delete_user_usecase_1.DeleteUserUseCase(
      new users_typeorm_repository_1.UsersTypeormRepository(
        typeorm_1.dataSource.getRepository(users_entity_1.User),
      ),
    )
    const deletedUser = await deleteUserUseCase.execute(id)
    return res.status(201).json(deletedUser)
  } catch (error) {
    next(error)
  }
}
//# sourceMappingURL=delete-user.controller.js.map

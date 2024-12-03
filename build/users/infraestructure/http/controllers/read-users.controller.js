'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.listUsersController = listUsersController
const read_users_usecase_1 = require('../../../../users/usecases/read-users.usecase')
const users_typeorm_repository_1 = require('../../../../users/infraestructure/typeorm/repositories/users-typeorm.repository')
const typeorm_1 = require('../../../../common/infraestructure/typeorm')
const users_entity_1 = require('../../../../users/infraestructure/typeorm/entities/users.entity')
async function listUsersController(req, res, next) {
  const filters = {
    name: req.query.name?.toString(),
    email: req.query.email?.toString(),
    deleted: req.query.deleted === 'true',
  }
  const orderBy = [
    {
      field: req.query.orderField?.toString() || 'fullName',
      direction: req.query.orderDirection === 'DESC' ? 'DESC' : 'ASC',
    },
  ]
  const pagination = {
    page: parseInt(req.query.page) || 1,
    perPage: parseInt(req.query.perPage) || 10,
  }
  const listUsersUseCase = new read_users_usecase_1.ListUsersUseCase(
    new users_typeorm_repository_1.UsersTypeormRepository(
      typeorm_1.dataSource.getRepository(users_entity_1.User),
    ),
  )
  try {
    const result = await listUsersUseCase.execute({
      filters,
      orderBy,
      pagination,
    })
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
//# sourceMappingURL=read-users.controller.js.map

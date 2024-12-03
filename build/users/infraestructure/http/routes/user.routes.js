'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.userRoutes = void 0
const express_1 = require('express')
const celebrate_1 = require('celebrate')
const create_user_controllers_1 = require('../../../../users/infraestructure/http/controllers/create-user.controllers')
const read_users_controller_1 = require('../controllers/read-users.controller')
const read_single_user_controller_1 = require('../controllers/read-single-user.controller')
const update_user_controller_1 = require('../controllers/update-user.controller')
const delete_user_controller_1 = require('../controllers/delete-user.controller')
const login_controller_1 = require('../controllers/login.controller')
const is_authenticated_1 = __importDefault(
  require('../../../../common/domain/errors/is-authenticated'),
)
const userRoutes = (0, express_1.Router)()
exports.userRoutes = userRoutes
userRoutes.post(
  '/',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
      fullName: celebrate_1.Joi.string().required(),
      email: celebrate_1.Joi.string().email().required(),
      password: celebrate_1.Joi.string().min(4).required(),
      createdAt: celebrate_1.Joi.date().optional(),
      deletedAt: celebrate_1.Joi.date().allow(null).optional(),
    },
  }),
  (req, res, next) => {
    ;(0, create_user_controllers_1.createUserController)(req, res, next)
  },
)
userRoutes.get(
  '/',
  is_authenticated_1.default,
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: {
      page: celebrate_1.Joi.number().positive().optional(),
      per_page: celebrate_1.Joi.number().positive().optional(),
      name: celebrate_1.Joi.string().optional(),
      email: celebrate_1.Joi.string().optional(),
      excluded: celebrate_1.Joi.boolean().optional(),
      orderBy: celebrate_1.Joi.array()
        .items(
          celebrate_1.Joi.string().valid('fullName', 'createdAt', 'deletedAt'),
        )
        .max(3)
        .optional(),
    },
  }),
  (req, res, next) => {
    ;(0, read_users_controller_1.listUsersController)(req, res, next)
  },
)
userRoutes.get(
  '/:id',
  is_authenticated_1.default,
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
  }),
  (req, res, next) => {
    ;(0, read_single_user_controller_1.getUserByIdController)(req, res, next)
  },
)
userRoutes.put(
  '/:id',
  is_authenticated_1.default,
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
    [celebrate_1.Segments.BODY]: {
      fullName: celebrate_1.Joi.string().optional(),
      email: celebrate_1.Joi.string().email().optional(),
      password: celebrate_1.Joi.string().min(4).optional(),
    },
  }),
  (req, res, next) => {
    ;(0, update_user_controller_1.updateUserController)(req, res, next)
  },
)
userRoutes.delete(
  '/:id',
  is_authenticated_1.default,
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
  }),
  (req, res, next) => {
    ;(0, delete_user_controller_1.deleteUserController)(req, res, next)
  },
)
userRoutes.post(
  '/signup',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
      email: celebrate_1.Joi.string().email().required(),
      password: celebrate_1.Joi.string().min(4).required(),
    },
  }),
  (req, res, next) => {
    ;(0, login_controller_1.loginUserController)(req, res, next)
  },
)
//# sourceMappingURL=user.routes.js.map

'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const create_customer_controller_1 = require('../controllers/create-customer.controller')
const celebrate_1 = require('celebrate')
const read_costumer_controller_1 = require('../controllers/read-costumer.controller')
const update_customer_controller_1 = require('../controllers/update-customer.controller')
const is_authenticated_1 = __importDefault(
  require('../../../../../common/domain/errors/is-authenticated'),
)
const customerRouter = (0, express_1.Router)()
customerRouter.use(is_authenticated_1.default)
customerRouter.post(
  '/',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
      fullName: celebrate_1.Joi.string().required(),
      dateBirth: celebrate_1.Joi.date().required(),
      email: celebrate_1.Joi.string().email().required(),
      cpf: celebrate_1.Joi.string().required(),
      phone: celebrate_1.Joi.string().required(),
    },
  }),
  (req, res, next) => {
    ;(0, create_customer_controller_1.createCustomerController)(req, res, next)
  },
)
customerRouter.get(
  '/:id',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
  }),
  (req, res, next) => {
    ;(0, read_costumer_controller_1.readCustomerController)(req, res, next)
  },
)
customerRouter.patch(
  '/:id',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
      fullName: celebrate_1.Joi.string().optional(),
      dateBirth: celebrate_1.Joi.date().optional(),
      email: celebrate_1.Joi.string().email().optional(),
      cpf: celebrate_1.Joi.string().optional(),
      phone: celebrate_1.Joi.string().optional(),
    },
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
  }),
  (req, res, next) => {
    ;(0, update_customer_controller_1.updateCustomerController)(req, res, next)
  },
)
exports.default = customerRouter
//# sourceMappingURL=customer.route.js.map

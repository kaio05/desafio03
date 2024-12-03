'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.orderRoutes = void 0
const express_1 = require('express')
const create_order_controller_1 = require('../controllers/create-order.controller')
const read_order_controller_1 = require('../controllers/read-order.controller')
const read_orders_controller_1 = require('../controllers/read-orders.controller')
const celebrate_1 = require('celebrate')
const delete_order_controller_1 = require('../controllers/delete-order.controller')
const update_order_controller_1 = require('../controllers/update-order.controller')
const is_authenticated_1 = __importDefault(
  require('../../../../common/domain/errors/is-authenticated'),
)
const orderRoutes = (0, express_1.Router)()
exports.orderRoutes = orderRoutes
orderRoutes.use(is_authenticated_1.default)
orderRoutes.post(
  '/',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
      carId: celebrate_1.Joi.string().uuid().required(),
      customerId: celebrate_1.Joi.string().uuid().required(),
    },
  }),
  (req, res, next) => {
    ;(0, create_order_controller_1.createOrderController)(req, res, next)
  },
)
orderRoutes.get(
  '/',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: {
      page: celebrate_1.Joi.number().positive().optional(),
      per_page: celebrate_1.Joi.number().positive().optional(),
      cep: celebrate_1.Joi.string()
        .pattern(/^[0-9]{8}/)
        .length(8)
        .optional(),
      total: celebrate_1.Joi.number().optional(),
      initialDate: celebrate_1.Joi.date().optional(),
      finalDate: celebrate_1.Joi.date().optional(),
      cancelDate: celebrate_1.Joi.date().optional(),
      status: celebrate_1.Joi.string()
        .valid('Aberto', 'Aprovado', 'Cancelado')
        .optional(),
      city: celebrate_1.Joi.string().optional(),
      uf: celebrate_1.Joi.string()
        .valid('AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE')
        .optional(),
      clientCpf: celebrate_1.Joi.string().optional(),
    },
  }),
  (req, res, next) => {
    ;(0, read_orders_controller_1.readOrdersController)(req, res, next)
  },
)
orderRoutes.get(
  '/:id',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
  }),
  (req, res, next) => {
    ;(0, read_order_controller_1.readOrderController)(req, res, next)
  },
)
orderRoutes.patch(
  '/:id',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
    [celebrate_1.Segments.BODY]: {
      cep: celebrate_1.Joi.string()
        .pattern(/^[0-9]{8}/)
        .length(8)
        .optional(),
      total: celebrate_1.Joi.number().optional(),
      initialDate: celebrate_1.Joi.date().min('now').optional(),
      finalDate: celebrate_1.Joi.date().optional(),
      cancelDate: celebrate_1.Joi.date().optional(),
      status: celebrate_1.Joi.string()
        .valid('Aberto', 'Aprovado', 'Cancelado')
        .optional(),
    },
  }),
  (req, res, next) => {
    ;(0, update_order_controller_1.updateOrderController)(req, res, next)
  },
)
orderRoutes.delete(
  '/:id',
  (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
      id: celebrate_1.Joi.string().uuid().required(),
    },
  }),
  (req, res, next) => {
    ;(0, delete_order_controller_1.deleteOrderController)(req, res, next)
  },
)
//# sourceMappingURL=orders.route.js.map

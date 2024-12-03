'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.dataSource = void 0
const cars_entity_1 = require('../../../cars/infraestructure/typeorm/entities/cars.entity')
const items_entity_1 = require('../../../cars/infraestructure/typeorm/entities/items.entity')
const customer_entity_1 = __importDefault(
  require('../../../modules/customer/infraestructure/typeorm/entities/customer.entity'),
)
const orders_entity_1 = require('../../../orders/infrastructure/typeorm/entities/orders.entity')
const typeorm_1 = require('typeorm')
const _1730228276828_CreateCars_1 = require('./migrations/1730228276828-CreateCars')
const _1730228906205_CreateItems_1 = require('./migrations/1730228906205-CreateItems')
const _1730237813958_CreateOrders_1 = require('./migrations/1730237813958-CreateOrders')
const _1730250492317_CreateUsers_1 = require('./migrations/1730250492317-CreateUsers')
const _1730251259678_CreateTokens_1 = require('./migrations/1730251259678-CreateTokens')
const _1730485886879_CreateCustomers_1 = require('./migrations/1730485886879-CreateCustomers')
const _1730489667223_changeTypeOfPrice_1 = require('./migrations/1730489667223-changeTypeOfPrice')
const _1730657179163_SeedUsers_1 = require('./migrations/1730657179163-SeedUsers')
const users_entity_1 = require('../../../users/infraestructure/typeorm/entities/users.entity')
exports.dataSource = new typeorm_1.DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'docker-postgres',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  port: 5432,
  migrations: [
    _1730228276828_CreateCars_1.CreateCars1730228276828,
    _1730228906205_CreateItems_1.CreateItems1730228906205,
    _1730250492317_CreateUsers_1.CreateUsers1730228906206,
    _1730657179163_SeedUsers_1.SeedUsers1730657179163,
    _1730485886879_CreateCustomers_1.CreateCustomers1730485886879,
    _1730251259678_CreateTokens_1.CreateTokens1730228906207,
    _1730237813958_CreateOrders_1.CreateOrders1730237813958,
    _1730489667223_changeTypeOfPrice_1.ChangeTypeOfPrice1730489667223,
  ],
  synchronize: true,
  entities: [
    cars_entity_1.Car,
    items_entity_1.Item,
    orders_entity_1.Order,
    customer_entity_1.default,
    users_entity_1.User,
  ],
})
//# sourceMappingURL=index.js.map

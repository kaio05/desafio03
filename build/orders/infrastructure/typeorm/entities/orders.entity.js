"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const cars_entity_1 = require("../../../../cars/infraestructure/typeorm/entities/cars.entity");
const customer_entity_1 = __importDefault(require("../../../../modules/customer/infraestructure/typeorm/entities/customer.entity"));
const typeorm_1 = require("typeorm");
let Order = class Order {
    id;
    cep;
    city;
    total;
    initialDate;
    finalDate;
    cancelDate;
    status;
    uf;
    customer;
    car;
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "initialDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "finalDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Order.prototype, "cancelDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['Aberto', 'Aprovado', 'Cancelado'],
        nullable: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
    }),
    __metadata("design:type", String)
], Order.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => customer_entity_1.default),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", customer_entity_1.default)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cars_entity_1.Car),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cars_entity_1.Car)
], Order.prototype, "car", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)('orders')
], Order);
//# sourceMappingURL=orders.entity.js.map
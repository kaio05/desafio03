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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const typeorm_1 = require("typeorm");
const items_entity_1 = require("./items.entity");
let Car = class Car {
    id;
    licensePlate;
    brand;
    model;
    mileage;
    year;
    price;
    registrationDate;
    status;
    items;
};
exports.Car = Car;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Car.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Car.prototype, "licensePlate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Car.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Car.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Car.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Car.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'registrationDate' }),
    __metadata("design:type", Date)
], Car.prototype, "registrationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['ativo', 'inativo', 'excluído'] }),
    __metadata("design:type", String)
], Car.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => items_entity_1.Item, (item) => item.car, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Car.prototype, "items", void 0);
exports.Car = Car = __decorate([
    (0, typeorm_1.Entity)('cars')
], Car);
//# sourceMappingURL=cars.entity.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerController = deleteCustomerController;
const typeorm_1 = require("@/common/infraestructure/typeorm");
const customer_entity_1 = __importDefault(require("../../typeorm/entities/customer.entity"));
const customers_typeorm_repository_1 = require("../../typeorm/repositories/customers.typeorm.repository");
const delete_customer_usecase_1 = require("@/modules/customer/usecases/delete-customer.usecase");
async function deleteCustomerController(req, res, next) {
    try {
        const { id } = req.params;
        const deleteCustomerUseCase = new delete_customer_usecase_1.DeleteCustomerUseCase(new customers_typeorm_repository_1.CustomersTypeormRepository(typeorm_1.dataSource.getRepository(customer_entity_1.default)));
        const deletedCustomer = await deleteCustomerUseCase.execute(id);
        return res.status(201).json(deletedCustomer);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=delete-customer.controller.js.map
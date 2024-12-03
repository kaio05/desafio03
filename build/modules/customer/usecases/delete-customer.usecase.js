"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerUseCase = void 0;
const app_error_1 = require("@/common/domain/errors/app-error");
class DeleteCustomerUseCase {
    customerRepository;
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(id) {
        const customerExists = await this.customerRepository.findByID(id);
        if (!customerExists) {
            throw new app_error_1.AppError("Cliente não existe", 404);
        }
        if (customerExists.deletionDate) {
            throw new app_error_1.AppError('Cliente já foi deletado', 400);
        }
        customerExists.deletionDate = new Date();
        const deletedCustomer = await this.customerRepository.update(customerExists);
        return deletedCustomer;
    }
}
exports.DeleteCustomerUseCase = DeleteCustomerUseCase;
//# sourceMappingURL=delete-customer.usecase.js.map
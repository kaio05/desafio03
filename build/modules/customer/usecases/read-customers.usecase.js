"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadCustomersUseCase = void 0;
class ReadCustomersUseCase {
    customerRepository;
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(input) {
        const { filters, orderBy, pagination } = input;
        const { customers, total } = await this.customerRepository.findAllWithFilters(filters, orderBy, pagination);
        const pages = Math.ceil(total / (pagination?.perPage || 10));
        return { customers, total, pages };
    }
}
exports.ReadCustomersUseCase = ReadCustomersUseCase;
//# sourceMappingURL=read-customers.usecase.js.map
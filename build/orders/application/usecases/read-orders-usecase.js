"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadOrdersUseCase = void 0;
class ReadOrdersUseCase {
    orderRepository;
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(input) {
        const searchResults = await this.orderRepository.findAllAndFilter(input);
        const returnedData = [];
        searchResults.data.map((order) => {
            returnedData.push(order);
        });
        return { ...searchResults, data: returnedData };
    }
}
exports.ReadOrdersUseCase = ReadOrdersUseCase;
//# sourceMappingURL=read-orders-usecase.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadCarsUseCase = void 0;
class ReadCarsUseCase {
    carRepository;
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async execute(input) {
        const searchResults = await this.carRepository.findAllAndFilter(input);
        const returnedData = searchResults.data.map((car) => ({
            ...car,
            items: car.items,
        }));
        return { ...searchResults, data: returnedData };
    }
}
exports.ReadCarsUseCase = ReadCarsUseCase;
//# sourceMappingURL=read-cars.usecase.js.map
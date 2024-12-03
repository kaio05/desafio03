"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCarUseCase = void 0;
const app_error_1 = require("../../common/domain/errors/app-error");
class CreateCarUseCase {
    carRepository;
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async execute(input) {
        const carExists = await this.carRepository.findByLicensePlate(input.licensePlate);
        if (carExists)
            throw new app_error_1.AppError('Car already exists', 409);
        const car = {
            ...input,
            items: input.items.map((item) => {
                return { name: item };
            }),
        };
        const carInst = this.carRepository.create(car);
        await this.carRepository.insert(carInst);
        return {
            id: carInst.id,
            model: car.model,
            brand: car.brand,
            licensePlate: car.licensePlate,
            mileage: car.mileage,
            year: car.year,
            items: input.items,
            price: car.price,
            registrationDate: carInst.registrationDate,
            status: car.status,
        };
    }
}
exports.CreateCarUseCase = CreateCarUseCase;
//# sourceMappingURL=create-car.usecase.js.map
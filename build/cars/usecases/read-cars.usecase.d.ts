import { CarsRepository } from '../domain/repositories/cars.repository';
import { readOutput } from './read-car.usecase';
export type readCarsInput = {
    page?: number;
    per_page?: number;
    model?: string;
    brand?: string;
    licensePlateFinalDigits?: string;
    mileage?: number;
    untilYear?: number;
    fromYear?: number;
    minPrice?: number;
    maxPrice?: number;
    items?: string[];
};
export type readCarsOutput = {
    per_page: number;
    page: number;
    count: number;
    data: readOutput;
};
export declare class ReadCarsUseCase {
    private carRepository;
    constructor(carRepository: CarsRepository);
    execute(input: readCarsInput): Promise<readCarsOutput>;
}

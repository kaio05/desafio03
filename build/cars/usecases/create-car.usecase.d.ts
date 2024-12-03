import { CarsRepository } from '../domain/repositories/cars.repository';
export type CreateCarInput = {
    model: string;
    brand: string;
    licensePlate: string;
    mileage?: number;
    year: number;
    items: string[];
    price: number;
    status: 'ativo' | 'inativo' | 'excluído';
};
export type CreateCarOutput = {
    id: string;
    model: string;
    brand: string;
    licensePlate: string;
    mileage?: number;
    year: number;
    items: string[];
    price: number;
    registrationDate: Date;
    status: 'ativo' | 'inativo' | 'excluído';
};
export declare class CreateCarUseCase {
    private carRepository;
    constructor(carRepository: CarsRepository);
    execute(input: CreateCarInput): Promise<CreateCarOutput>;
}

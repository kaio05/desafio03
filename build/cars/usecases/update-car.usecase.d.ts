import { CarsRepository } from '../domain/repositories/cars.repository';
export type UpdateCarInput = {
    model?: string;
    brand?: string;
    licensePlate?: string;
    mileage?: number;
    year?: number;
    items?: string[];
    price?: number;
    status?: 'ativo' | 'inativo' | 'excluído';
};
export type UpdateCarOutput = {
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
export declare class UpdateCarUseCase {
    private carRepository;
    constructor(carRepository: CarsRepository);
    execute(id: string, { model, brand, year, licensePlate, items, status, mileage, price, }: UpdateCarInput): Promise<UpdateCarOutput>;
}

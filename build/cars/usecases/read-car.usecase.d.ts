import { CarsRepository } from '../domain/repositories/cars.repository';
export type readOutput = {
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
export declare class ReadCarUseCase {
    private carRepository;
    constructor(carRepository: CarsRepository);
    execute(id: string): Promise<readOutput>;
}

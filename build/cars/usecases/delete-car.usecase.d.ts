import { CarsRepository } from '../domain/repositories/cars.repository';
import { OrdersRepository } from '@/orders/domain/repositories/orders.repository';
export type DeleteCarOutput = {
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
export declare class DeleteCarUseCase {
    private carRepository;
    private orderRepository;
    constructor(carRepository: CarsRepository, orderRepository: OrdersRepository);
    execute(id: string): Promise<DeleteCarOutput>;
}

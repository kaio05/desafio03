import { CarsRepository } from '@/cars/domain/repositories/cars.repository';
import { CustomerRepository } from '@/modules/customer/domain/repositories/customer.repository';
import { OrdersRepository } from '@/orders/domain/repositories/orders.repository';
import { ufUnion } from '@/orders/utils/ufUnion';
export declare namespace CreateOrderUseCase {
    type Input = {
        carId: string;
        customerId: string;
    };
    type Output = {
        id: string;
        cep: string;
        city: string;
        total: number;
        initialDate: Date;
        finalDate: Date;
        cancelDate: Date;
        customerCpf: string;
        carId: string;
        status: 'Aberto' | 'Aprovado' | 'Cancelado';
        uf: ufUnion;
    };
    class UseCase {
        private orderRepository;
        private customerRepository;
        private carRepository;
        constructor(orderRepository: OrdersRepository, customerRepository: CustomerRepository, carRepository: CarsRepository);
        execute(input: Input): Promise<Output>;
    }
}

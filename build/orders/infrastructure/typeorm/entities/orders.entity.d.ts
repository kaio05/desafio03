import { Car } from '../../../../cars/infraestructure/typeorm/entities/cars.entity';
import Customer from '../../../../modules/customer/infraestructure/typeorm/entities/customer.entity';
import { OrderModel } from '../../../../orders/domain/models/orders.model';
export declare class Order implements OrderModel {
    id: string;
    cep: string | null;
    city: string | null;
    total: number;
    initialDate: Date | null;
    finalDate: Date | null;
    cancelDate: Date | null;
    status: 'Aberto' | 'Aprovado' | 'Cancelado' | null;
    uf: 'AL' | 'BA' | 'CE' | 'MA' | 'PB' | 'PE' | 'PI' | 'RN' | 'SE' | null;
    customer: Customer;
    car: Car;
}

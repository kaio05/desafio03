import { OrdersRepository } from '@/orders/domain/repositories/orders.repository';
import { carModelInput } from '@/orders/utils/schemas';
import { ufUnion } from '@/orders/utils/ufUnion';
export type readOutput = {
    id: string;
    cep: string;
    city: string;
    total: number;
    initialDate: Date;
    finalDate: Date;
    cancelDate: Date;
    car: carModelInput;
    status: 'Aberto' | 'Aprovado' | 'Cancelado';
    uf: ufUnion;
};
export declare class ReadOrderUseCase {
    private orderRepository;
    constructor(orderRepository: OrdersRepository);
    execute(id: string): Promise<readOutput | null>;
}

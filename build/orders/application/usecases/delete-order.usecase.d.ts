import { OrdersRepository } from '@/orders/domain/repositories/orders.repository';
export declare class DeleteOrderUseCase {
    private orderRepository;
    constructor(orderRepository: OrdersRepository);
    execute(id: string): Promise<void>;
}

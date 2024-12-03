import { OrderModel } from '@/orders/domain/models/orders.model';
import { OrdersRepository, CreateOrderProps, findParams, findResults } from '@/orders/domain/repositories/orders.repository';
import { Repository } from 'typeorm';
import { Order } from '../entities/orders.entity';
export declare class OrdersTypeormRepository implements OrdersRepository {
    private ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    findAllAndFilter(params: findParams): Promise<findResults>;
    create(props: CreateOrderProps): OrderModel;
    insert(model: OrderModel): Promise<OrderModel>;
    findWithRelations(id: string, ...relations: string[]): Promise<OrderModel | null>;
    findById(id: string): Promise<OrderModel>;
    findWithCustomer(id: string): Promise<OrderModel>;
    update(model: OrderModel): Promise<OrderModel>;
    delete(model: OrderModel): Promise<OrderModel>;
}

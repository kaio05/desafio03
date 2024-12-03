import { OrdersRepository } from '@/orders/domain/repositories/orders.repository';
import { ufUnion } from '@/orders/utils/ufUnion';
export type UpdateOrderInput = {
    cep?: string;
    total?: number;
    initialDate?: Date;
    finalDate?: Date;
    cancelDate?: Date;
    status?: 'Aberto' | 'Aprovado' | 'Cancelado';
};
export type UpdateOrderOutput = {
    cep: string;
    city: string;
    total: number;
    initialDate: Date;
    finalDate: Date;
    status: 'Aberto' | 'Aprovado' | 'Cancelado';
    uf: ufUnion;
};
export declare class UpdateOrderUseCase {
    private orderRepository;
    constructor(orderRepository: OrdersRepository);
    execute(id: string, { cep, total, initialDate, finalDate, cancelDate, status, }: UpdateOrderInput): Promise<UpdateOrderOutput>;
}

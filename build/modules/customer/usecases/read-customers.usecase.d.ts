import { CustomerModel } from './../domain/models/customer.model';
import { CustomerRepository, CustomerFilterParams, CustomerPaginationParams, CustomerOrderByParams } from '../domain/repositories/customer.repository';
export type ListCustomersInput = {
    filters?: CustomerFilterParams;
    orderBy?: CustomerOrderByParams[];
    pagination?: CustomerPaginationParams;
};
export type ListCustomersOutput = {
    customers: CustomerModel[];
    total: number;
    pages: number;
};
export declare class ReadCustomersUseCase {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    execute(input: ListCustomersInput): Promise<ListCustomersOutput>;
}

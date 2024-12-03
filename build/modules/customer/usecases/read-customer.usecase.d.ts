import { CustomerRepository } from '../domain/repositories/customer.repository';
import { CustomerModel } from '../domain/models/customer.model';
export declare class ReadCustomerUseCase {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    execute(id: string): Promise<CustomerModel>;
}

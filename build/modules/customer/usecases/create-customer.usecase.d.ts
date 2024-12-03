import { CustomerRepository } from './../domain/repositories/customer.repository';
import { CustomerModel } from './../domain/models/customer.model';
interface CreateCustomer {
    fullName: string;
    dateBirth: Date;
    cpf: string;
    email: string;
    phone: string;
}
export declare class CreateCustomerUseCase {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    execute(input: CreateCustomer): Promise<CustomerModel>;
}
export {};

import { CustomerRepository } from '../domain/repositories/customer.repository';
import { CustomerModel } from '../domain/models/customer.model';
export type UpdateCustomerInput = {
    id: string;
    dateBirth?: Date;
    phone?: string;
    fullName?: string;
    email?: string;
    cpf?: string;
};
export declare class UpdateCustomerUseCase {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    execute(input: UpdateCustomerInput): Promise<CustomerModel>;
}

import { CustomerModel } from "../domain/models/customer.model";
import { CustomerRepository } from "../domain/repositories/customer.repository";
export declare class DeleteCustomerUseCase {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    execute(id: string): Promise<CustomerModel>;
}

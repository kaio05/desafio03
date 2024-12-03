import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { CustomerModel } from '@/modules/customer/domain/models/customer.model';
import { CustomerRepository, CreateCustomerProps, CustomerFilterParams, CustomerOrderByParams, CustomerPaginationParams } from '@/modules/customer/domain/repositories/customer.repository';
export declare class CustomersTypeormRepository implements CustomerRepository {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findByEmailOrCPF(email: string, cpf: string): Promise<CustomerModel | null>;
    findById(id: string): Promise<CustomerModel>;
    update(model: CustomerModel): Promise<CustomerModel>;
    delete(customer: CustomerModel): Promise<CustomerModel>;
    create(props: CreateCustomerProps): CustomerModel;
    insert(customer: CustomerModel): Promise<CustomerModel>;
    findByID(id: string): Promise<CustomerModel>;
    findByEmail(email: string): Promise<CustomerModel | null>;
    findByCPF(cpf: string): Promise<CustomerModel | null>;
    findAllWithFilters(filters?: CustomerFilterParams, orderBy?: CustomerOrderByParams[], pagination?: CustomerPaginationParams): Promise<{
        customers: CustomerModel[];
        total: number;
    }>;
}

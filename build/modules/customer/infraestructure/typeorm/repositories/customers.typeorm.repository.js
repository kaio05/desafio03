"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersTypeormRepository = void 0;
class CustomersTypeormRepository {
    customerRepository;
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    findByEmailOrCPF(email, cpf) {
        throw new Error('Method not implemented.');
    }
    findById(id) {
        return this.customerRepository.findOne({ where: { id } });
    }
    update(model) {
        return this.customerRepository.save(model);
    }
    delete(customer) {
        throw new Error('Method not implemented.');
    }
    create(props) {
        return this.customerRepository.create(props);
    }
    async insert(customer) {
        return await this.customerRepository.save(customer);
    }
    async findByID(id) {
        return await this.customerRepository.findOne({ where: { id } });
    }
    async findByEmail(email) {
        return await this.customerRepository.findOne({ where: { email } });
    }
    async findByCPF(cpf) {
        return await this.customerRepository.findOne({ where: { cpf } });
    }
    async findAllWithFilters(filters = {}, orderBy = [], pagination = { page: 1, perPage: 10 }) {
        const queryBuilder = this.customerRepository.createQueryBuilder('customer');
        if (filters.name) {
            queryBuilder.andWhere('customer.fullName ILIKE :name', {
                name: `%${filters.name}%`,
            });
        }
        if (filters.email) {
            queryBuilder.andWhere('customer.email ILIKE :email', {
                email: `%${filters.email}%`,
            });
        }
        if (filters.deleted !== undefined) {
            if (filters.deleted) {
                queryBuilder.andWhere('customer.deletionDate IS NOT NULL');
            }
            else {
                queryBuilder.andWhere('customer.deletionDate IS NULL');
            }
        }
        for (const order of orderBy) {
            queryBuilder.addOrderBy(`customer.${order.field}`, order.direction);
        }
        const total = await queryBuilder.getCount();
        queryBuilder
            .skip((pagination.page - 1) * pagination.perPage)
            .take(pagination.perPage);
        const customers = await queryBuilder.getMany();
        return { customers, total };
    }
}
exports.CustomersTypeormRepository = CustomersTypeormRepository;
//# sourceMappingURL=customers.typeorm.repository.js.map
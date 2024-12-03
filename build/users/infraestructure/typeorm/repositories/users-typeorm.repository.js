"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTypeormRepository = void 0;
class UsersTypeormRepository {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    update(model) {
        return this.userRepository.save(model);
    }
    delete(user) {
        throw new Error('Method not implemented.');
    }
    create(props) {
        return this.userRepository.create(props);
    }
    async insert(user) {
        return await this.userRepository.save(user);
    }
    async findByID(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async findByEmail(email) {
        return await this.userRepository.findOne({ where: { email } });
    }
    async findAllWithFilters(filters = {}, orderBy = [], pagination = { page: 1, perPage: 10 }) {
        const queryBuilder = this.userRepository.createQueryBuilder('user');
        if (filters.name) {
            queryBuilder.andWhere('user.fullName ILIKE :name', { name: `%${filters.name}%` });
        }
        if (filters.email) {
            queryBuilder.andWhere('user.email ILIKE :email', { email: `%${filters.email}%` });
        }
        if (filters.deleted !== undefined) {
            if (filters.deleted) {
                queryBuilder.andWhere('user.deletionDate IS NOT NULL');
            }
            else {
                queryBuilder.andWhere('user.deletionDate IS NULL');
            }
        }
        for (const order of orderBy) {
            queryBuilder.addOrderBy(`user.${order.field}`, order.direction);
        }
        const total = await queryBuilder.getCount();
        queryBuilder.skip((pagination.page - 1) * pagination.perPage).take(pagination.perPage);
        const users = await queryBuilder.getMany();
        return { users, total };
    }
}
exports.UsersTypeormRepository = UsersTypeormRepository;
//# sourceMappingURL=users-typeorm.repository.js.map
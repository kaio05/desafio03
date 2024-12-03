import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { UserRepository, CreateUserProps, UserFilterParams, UserPaginationParams, UserOrderByParams } from '@/users/domain/repositories/users.repository';
import { UserModel } from '@/users/domain/models/users.model';
export declare class UsersTypeormRepository implements UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: string): Promise<UserModel>;
    update(model: UserModel): Promise<UserModel>;
    delete(user: UserModel): Promise<UserModel>;
    create(props: CreateUserProps): User;
    insert(user: User): Promise<User>;
    findByID(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAllWithFilters(filters?: UserFilterParams, orderBy?: UserOrderByParams[], pagination?: UserPaginationParams): Promise<{
        users: User[];
        total: number;
    }>;
}

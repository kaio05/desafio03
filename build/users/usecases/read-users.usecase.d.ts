import { UserRepository, UserFilterParams, UserPaginationParams, UserOrderByParams } from '@/users/domain/repositories/users.repository';
import { UserModel } from '@/users/domain/models/users.model';
export type ListUsersInput = {
    filters?: UserFilterParams;
    orderBy?: UserOrderByParams[];
    pagination?: UserPaginationParams;
};
export type ListUsersOutput = {
    users: UserModel[];
    total: number;
    pages: number;
};
export declare class ListUsersUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(input: ListUsersInput): Promise<ListUsersOutput>;
}

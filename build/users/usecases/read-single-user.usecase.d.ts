import { UserRepository } from '@/users/domain/repositories/users.repository';
import { UserModel } from '@/users/domain/models/users.model';
export declare class GetUserByIdUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string): Promise<UserModel>;
}

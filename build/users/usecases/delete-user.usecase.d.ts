import { UserModel } from '../domain/models/users.model';
import { UserRepository } from '../domain/repositories/users.repository';
export declare class DeleteUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string): Promise<UserModel>;
}

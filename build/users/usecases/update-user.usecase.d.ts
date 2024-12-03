import { UserRepository } from '@/users/domain/repositories/users.repository';
export type UpdateUserInput = {
    id: string;
    fullName?: string;
    email?: string;
    password?: string;
};
export type UpdateUserOutput = {
    id: string;
    fullName: string;
    email: string;
};
export declare class UpdateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(input: UpdateUserInput): Promise<UpdateUserOutput>;
}

import { UserRepository } from '../domain/repositories/users.repository';
export type CreateUserInput = {
    fullName: string;
    email: string;
    password: string;
};
export type CreateUserOutput = {
    id: string;
    name: string;
    email: string;
};
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(input: CreateUserInput): Promise<CreateUserOutput>;
}

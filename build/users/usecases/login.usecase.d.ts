import { UserRepository } from '../domain/repositories/users.repository';
export type LoginUserInput = {
    email: string;
    password: string;
};
export type LoginUserOutput = {
    id: string;
    name: string;
    email: string;
    token: string;
};
export declare class LoginUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(input: LoginUserInput): Promise<LoginUserOutput>;
    private generateToken;
}

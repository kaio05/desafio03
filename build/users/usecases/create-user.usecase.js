"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const app_error_1 = require("../../common/domain/errors/app-error");
class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(input) {
        const existingUser = await this.userRepository.findByEmail(input.email);
        if (existingUser) {
            throw new app_error_1.AppError('Email já cadastrado', 409);
        }
        let hashedPassword;
        try {
            hashedPassword = await bcrypt_1.default.hash(input.password, 10);
        }
        catch (error) {
            throw new app_error_1.AppError(`Erro ao processar a senha: ${error}`, 500);
        }
        const user = this.userRepository.create({
            fullName: 'admin',
            email: input.email,
            password: hashedPassword,
        });
        const insertedUser = await this.userRepository.insert(user);
        if (!insertedUser) {
            throw new app_error_1.AppError('Erro ao inserir usuário', 500);
        }
        return {
            id: user.id,
            name: user.fullName,
            email: user.email,
        };
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=create-user.usecase.js.map
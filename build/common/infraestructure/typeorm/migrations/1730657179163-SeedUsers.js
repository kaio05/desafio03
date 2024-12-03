"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUsers1730657179163 = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class SeedUsers1730657179163 {
    async up(queryRunner) {
        const passwordHash = await bcrypt_1.default.hash('vasco', 10);
        await queryRunner.query(`
            INSERT INTO users (id, full_name, email, password, created_at)
            VALUES (
              gen_random_uuid(), 
              'Darwin Nunez', 
              'mudryk@email.com', 
              $1, 
              CURRENT_TIMESTAMP
            )
        `, [passwordHash]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM users WHERE email = 'mudryk@email.com'`);
    }
}
exports.SeedUsers1730657179163 = SeedUsers1730657179163;
//# sourceMappingURL=1730657179163-SeedUsers.js.map
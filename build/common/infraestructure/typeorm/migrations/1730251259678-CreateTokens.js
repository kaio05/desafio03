"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTokens1730228906207 = void 0;
class CreateTokens1730228906207 {
    async up(queryRunner) {
    }
    async down(queryRunner) {
        await queryRunner.dropTable('tokens', true);
    }
}
exports.CreateTokens1730228906207 = CreateTokens1730228906207;
//# sourceMappingURL=1730251259678-CreateTokens.js.map
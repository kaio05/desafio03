"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1730228906206 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1730228906206 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'gen_random_uuid()',
                },
                {
                    name: 'full_name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUsers1730228906206 = CreateUsers1730228906206;
//# sourceMappingURL=1730250492317-CreateUsers.js.map
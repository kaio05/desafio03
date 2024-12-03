"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomers1730485886879 = void 0;
const typeorm_1 = require("typeorm");
class CreateCustomers1730485886879 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'customers',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'fullName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'dateBirth',
                    type: 'timestamp',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'registrationDate',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: false,
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
        await queryRunner.dropTable('customers');
    }
}
exports.CreateCustomers1730485886879 = CreateCustomers1730485886879;
//# sourceMappingURL=1730485886879-CreateCustomers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrders1730237813958 = void 0;
const typeorm_1 = require("typeorm");
class CreateOrders1730237813958 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.query("CREATE TYPE statusOrder_enum AS ENUM ('Aberto', 'Aprovado', 'Cancelado')");
        await queryRunner.query("CREATE TYPE uf_enum AS ENUM ('AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE')");
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'orders',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'initial_date',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
                {
                    name: 'final_date',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
                {
                    name: 'status',
                    type: 'statusOrder_enum',
                    default: null,
                    isNullable: true,
                },
                {
                    name: 'cep',
                    type: 'varchar',
                    default: null,
                    isNullable: true,
                },
                {
                    name: 'city',
                    type: 'varchar',
                    default: null,
                    isNullable: true,
                },
                {
                    name: 'uf',
                    type: 'uf_enum',
                    default: null,
                    isNullable: true,
                },
                {
                    name: 'total_value',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                    default: 0,
                    isNullable: true,
                },
                {
                    name: 'cancel_date',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
        await queryRunner.dropTable('orders');
        await queryRunner.query(`DROP TYPE "status_enum"`);
        await queryRunner.query(`DROP TYPE "uf_enum"`);
    }
}
exports.CreateOrders1730237813958 = CreateOrders1730237813958;
//# sourceMappingURL=1730237813958-CreateOrders.js.map
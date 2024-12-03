"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCars1730228276828 = void 0;
const typeorm_1 = require("typeorm");
class CreateCars1730228276828 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.query("CREATE TYPE status_enum AS ENUM ('ativo', 'inativo', 'excluído')");
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'cars',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'licensePlate',
                    type: 'VARCHAR',
                    isNullable: false,
                },
                {
                    name: 'brand',
                    type: 'VARCHAR',
                    isNullable: false,
                },
                {
                    name: 'model',
                    type: 'VARCHAR',
                    isNullable: false,
                },
                {
                    name: 'mileage',
                    type: 'INTEGER',
                    isNullable: true,
                },
                {
                    name: 'year',
                    type: 'INTEGER',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'DECIMAL',
                    precision: 10,
                    scale: 2,
                    isNullable: false,
                },
                {
                    name: 'registrationDate',
                    type: 'TIMESTAMP',
                    default: 'now()',
                },
                {
                    name: 'status',
                    type: 'status_enum',
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
        await queryRunner.dropTable('cars');
        await queryRunner.query(`DROP TYPE "status_enum"`);
    }
}
exports.CreateCars1730228276828 = CreateCars1730228276828;
//# sourceMappingURL=1730228276828-CreateCars.js.map
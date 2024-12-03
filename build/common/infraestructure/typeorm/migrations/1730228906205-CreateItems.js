"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItems1730228906205 = void 0;
const typeorm_1 = require("typeorm");
class CreateItems1730228906205 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'items',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'VARCHAR',
                    isNullable: false,
                },
                {
                    name: 'carId',
                    type: 'uuid',
                    isNullable: false,
                },
            ],
        }));
        await queryRunner.createForeignKey('items', new typeorm_1.TableForeignKey({
            name: 'itemsCar',
            columnNames: ['carId'],
            referencedTableName: 'cars',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('items');
    }
}
exports.CreateItems1730228906205 = CreateItems1730228906205;
//# sourceMappingURL=1730228906205-CreateItems.js.map
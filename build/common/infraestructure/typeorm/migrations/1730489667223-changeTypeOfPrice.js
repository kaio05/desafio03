"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeTypeOfPrice1730489667223 = void 0;
class ChangeTypeOfPrice1730489667223 {
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE cars
            ALTER COLUMN price TYPE REAL
            USING price::REAL
          `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE cars
            ALTER COLUMN price TYPE DECIMAL(10, 2)
            USING price::DECIMAL(10, 2)
          `);
    }
}
exports.ChangeTypeOfPrice1730489667223 = ChangeTypeOfPrice1730489667223;
//# sourceMappingURL=1730489667223-changeTypeOfPrice.js.map
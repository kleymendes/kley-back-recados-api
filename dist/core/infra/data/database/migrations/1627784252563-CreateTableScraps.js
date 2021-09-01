"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableScraps1626658047457 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableScraps1626658047457 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'scraps',
                columns: [
                    {
                        name: 'uid',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        length: '50',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        length: '150',
                        isNullable: false,
                    },
                    {
                        name: 'user_uid',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    new typeorm_1.TableForeignKey({
                        referencedTableName: 'users',
                        referencedColumnNames: ['uid'],
                        columnNames: ['user_uid'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }),
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('scraps', true, true, true);
        });
    }
}
exports.CreateTableScraps1626658047457 = CreateTableScraps1626658047457;

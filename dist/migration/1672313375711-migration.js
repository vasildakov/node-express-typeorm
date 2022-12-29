"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1672313375711 = void 0;
class migration1672313375711 {
    constructor() {
        this.name = 'migration1672313375711';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }
}
exports.migration1672313375711 = migration1672313375711;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapEntity = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const user_entity_1 = require("./user.entity");
let ScrapEntity = class ScrapEntity extends typeorm_1.BaseEntity {
    beforeInsert() {
        this.uid = uuid_1.v4();
        this.createdAt = new Date(Date.now());
        this.updatedAt = new Date(Date.now());
    }
    beforeUpdate() {
        this.updatedAt = new Date(Date.now());
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ScrapEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ScrapEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ScrapEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_uid' }),
    __metadata("design:type", String)
], ScrapEntity.prototype, "userUID", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], ScrapEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ScrapEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, user => user.scraps),
    typeorm_1.JoinColumn({ name: 'user_uid', referencedColumnName: 'uid' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ScrapEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrapEntity.prototype, "beforeInsert", null);
__decorate([
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrapEntity.prototype, "beforeUpdate", null);
ScrapEntity = __decorate([
    typeorm_1.Entity({ name: 'scraps' })
], ScrapEntity);
exports.ScrapEntity = ScrapEntity;

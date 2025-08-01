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
exports.User = exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
let User = class User extends typeorm_1.BaseEntity {
};
exports.User = User;
__decorate([
    (0, typeorm_2.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_2.Column)('varchar', {
        length: 150,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_2.Column)('varchar', {
        length: 150,
        unique: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_2.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_2.Column)('enum', {
        enum: UserRole,
        default: UserRole.USER,
    }),
    __metadata("design:type", String)
], User.prototype, "rol", void 0);
__decorate([
    (0, typeorm_2.Column)('boolean', {
        nullable: false,
        default: true,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_2.Column)('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], User.prototype, "create_at", void 0);
exports.User = User = __decorate([
    (0, typeorm_2.Entity)()
], User);

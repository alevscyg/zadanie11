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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const routing_controllers_1 = require("routing-controllers");
const user_service_1 = require("../service/user.service");
require("reflect-metadata");
const create_user_dto_1 = require("../dto/create.user.dto");
let UserController = class UserController {
    constructor(userService = new user_service_1.UserService()) {
        this.userService = userService;
    }
    getAll() {
        return this.userService.getUsers();
    }
    getOne(id) {
        return this.userService.getUserById(id);
    }
    post(user) {
        return this.userService.createUser(user);
    }
    put(id, user) {
        return this.userService.updateUser(user, id);
    }
    remove(id) {
        return this.userService.deleteUserById(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, routing_controllers_1.Get)('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.Get)('/users/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Post)('/users'),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "post", null);
__decorate([
    (0, routing_controllers_1.Put)('/users/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "put", null);
__decorate([
    (0, routing_controllers_1.Delete)('/users/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, routing_controllers_1.Controller)(),
    __metadata("design:paramtypes", [Object])
], UserController);

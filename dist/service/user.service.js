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
exports.UserService = void 0;
const db_1 = require("../db");
const User_model_1 = require("../User.model");
class UserService {
    constructor(userRepository = db_1.myDataSource.getRepository(User_model_1.User)) {
        this.userRepository = userRepository;
        this.createUser = (dto) => __awaiter(this, void 0, void 0, function* () {
            const newUser = this.userRepository.create({ name: dto.name, age: dto.age });
            yield this.userRepository.save(newUser);
            return newUser;
        });
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find()
                .catch(err => console.log(err));
        });
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOneBy({ id });
        });
        this.deleteUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.delete(id);
            return result.affected ? `Пользователь с id = ${id} был удален` : "Пользователь не найден";
        });
        this.updateUser = (dto, id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOneBy({ id });
            if (!user) {
                return `Пользователь с id = ${id} не найден`;
            }
            this.userRepository.merge(user, dto);
            yield this.userRepository.save(user);
            return user;
        });
    }
}
exports.UserService = UserService;

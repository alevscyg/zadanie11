"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const user_controller_1 = require("./controller/user.controller");
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routing_controllers_1.useExpressServer)(app, {
    controllers: [user_controller_1.UserController],
});
app.listen(3000);

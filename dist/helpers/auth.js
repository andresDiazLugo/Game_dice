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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const Player_1 = require("../models/Player");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = __importDefault(require("../config"));
class Auth {
    constructor(email, passord, firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date = date;
        this.password = passord;
    }
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield new Player_1.Player({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                date: this.date,
                password: yield Player_1.Player.encryptPassword(this.password)
            });
            yield player.save();
            const jwt = (0, jsonwebtoken_1.sign)({ id: player.id }, config_1.default.jwtSecret, {
                expiresIn: '4h'
            });
            return jwt;
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const playerDB = yield Player_1.Player.findOne();
            if (!playerDB) {
                return 'Wrong email!!';
            }
            const validPassword = yield Player_1.Player.comparePassword(this.password, playerDB.password);
            if (!validPassword) {
                return 'Wrong password';
            }
            const jwt = (0, jsonwebtoken_1.sign)({ id: playerDB.id }, config_1.default.jwtSecret, {
                expiresIn: "4h"
            });
            return jwt;
        });
    }
}
exports.Auth = Auth;

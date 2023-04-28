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
exports.Player = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const PlayerSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is required']
        // validate: {
        //     validator: function(email:string) {
        //       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //       return emailRegex.test(email);
        //     },
        //     message: 'Correo electrónico inválido'
        //   } 
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    date: String,
    totalGames: {
        type: Number,
        default: 0
    },
    gameWon: {
        type: Number,
        default: 0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playerHistory: [Object]
}, {
    versionKey: false
});
PlayerSchema.static('encryptPassword', (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt(10);
    return yield bcryptjs_1.default.hash(password, salt);
}));
PlayerSchema.static('comparePassword', (password, recivedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(password, recivedPassword);
}));
exports.Player = (0, mongoose_1.model)('Player', PlayerSchema);

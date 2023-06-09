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
exports.UpdatePlayerName = void 0;
const Player_1 = require("../models/Player");
class UpdatePlayerName {
    constructor(id, firstName, lasName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lasName;
    }
    updateName() {
        return __awaiter(this, void 0, void 0, function* () {
            const update = {
                fitstName: this.firstName,
                lastName: this.lastName
            };
            const player = yield Player_1.Player.findOneAndUpdate({ _id: this.id }, update);
            return player;
        });
    }
}
exports.UpdatePlayerName = UpdatePlayerName;

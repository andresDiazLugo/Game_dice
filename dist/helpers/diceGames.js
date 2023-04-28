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
exports.RollGame = void 0;
const dices_1 = require("./dices");
const Player_1 = require("../models//Player");
class RollGame {
    constructor(id) {
        this.id = id;
    }
    PlayerRollDice() {
        return __awaiter(this, void 0, void 0, function* () {
            const game = (0, dices_1.rollDices)();
            const player = yield Player_1.Player.findById({
                _id: this.id
            });
            player.totalGames++;
            if (game.veredict === 'win') {
                player.gamesWon++;
            }
            player.playHistory.push(game);
            player.wonRate = parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed());
            yield player.save();
        });
    }
}
exports.RollGame = RollGame;

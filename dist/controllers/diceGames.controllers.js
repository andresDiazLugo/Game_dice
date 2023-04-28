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
exports.deleteGames = exports.getWorstPlayer = exports.getBetPlayer = exports.generalRanking = exports.playersRollDice = void 0;
const diceGames_1 = require("../helpers/diceGames");
const playersRollDice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const game = yield new diceGames_1.RollGame(id);
        const playerRollDices = yield game.PlayerRollDice();
        res.status(201).json({
            playerRollDices
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'the Id enteres isn`t valid'
        });
    }
});
exports.playersRollDice = playersRollDice;
const generalRanking = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.generalRanking = generalRanking;
const getBetPlayer = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.getBetPlayer = getBetPlayer;
const getWorstPlayer = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.getWorstPlayer = getWorstPlayer;
const deleteGames = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.deleteGames = deleteGames;

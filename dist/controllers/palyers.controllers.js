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
exports.deletePlayer = exports.updateName = exports.getOnePlayer = exports.getAllPlayer = void 0;
const getPalyers_1 = require("../helpers/getPalyers");
const updatePlayerName_1 = require("../helpers/updatePlayerName");
const getAllPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllPlayers = yield getPalyers_1.GetPlayer.getAllPlayers();
        res.status(201).json({
            getAllPlayers
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error 500 - inetrnal Server Error'
        });
    }
});
exports.getAllPlayer = getAllPlayer;
const getOnePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const player = new getPalyers_1.GetPlayer(id);
        const getPLayer = yield player.getOnePlayer();
        res.status(201).json({
            getPLayer
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error 500 - inetrnal Server Error'
        });
    }
});
exports.getOnePlayer = getOnePlayer;
const updateName = (req, res) => {
    try {
        const id = req.params.id;
        const { firstName, LastName } = req.body;
        const updatePlayerName = new updatePlayerName_1.UpdatePlayerName(id, firstName, LastName);
        res.status(201).json({
            msg: 'Player Updated',
            updatePlayerName
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            msg: 'Player doesn`t exist'
        });
    }
};
exports.updateName = updateName;
const deletePlayer = (req, res) => {
    try {
        const id = req.params.id;
        const player = new getPalyers_1.GetPlayer(id);
        player.getAndDelete();
        res.status(201).json({
            msg: 'Player deleted',
            player
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            msg: 'Player doesn`t exist'
        });
    }
};
exports.deletePlayer = deletePlayer;

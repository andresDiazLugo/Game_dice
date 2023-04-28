"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test = (req, res) => {
    res.status(200).json({
        msg: 'this function is correct'
    });
};
exports.test = test;

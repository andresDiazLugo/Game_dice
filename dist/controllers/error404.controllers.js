"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404 = void 0;
const error404 = (req, res) => {
    try {
        res.status(404).json({
            msg: 'Error 404-Page not Found'
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error 500 - internal server error'
        });
    }
};
exports.error404 = error404;

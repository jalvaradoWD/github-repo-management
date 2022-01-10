"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8080 || process.env.PORT;
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    return res.status(200).json({ message: 'Server is setup successfully' });
});
server.listen(PORT, () => console.log(`Server is on http://localhost:${PORT}`));

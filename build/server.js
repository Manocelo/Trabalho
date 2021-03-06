"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 3000;
app.use(express_1.default.static('public'));
app.listen(PORT, () => {
    console.log(`Servidor inicializado. Acesse: http://localhost/:$%7BPORT%7D%27`);
});

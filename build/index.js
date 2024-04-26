"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const notes_1 = require("./utils/notes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT;
app.get("/notes", (_req, res) => {
    res.send([...notes_1.tasks]);
});
app.listen(PORT, () => {
    console.log(`Node server running on port: ${PORT}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors_1 = __importDefault(require("cors"));
const app = express();
const PORT = 8089;
const mainRoute_1 = __importDefault(require("./routes/mainRoute"));
app.use((0, cors_1.default)());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mainRoute_1.default);
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const upload = multer_1.default();
app.post('/fileupload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const { file1, file2 } = req.files;
        const { fileName } = req.body;
        console.log(file1, file2);
        const { name, data } = file1;
        const { name: name2, data: data2 } = file2;
        const arr1 = name.split('.');
        const arr2 = name2.split('.');
        const extension1 = arr1[arr1.length - 1];
        const extension2 = arr2[arr2.length - 1];
        fs_1.default.writeFile(`./files/${fileName}${Math.random() * 100}.${extension1}`, data, (err) => {
            if (err)
                throw err;
            console.log('saved');
        });
        fs_1.default.writeFile(`./files/${fileName}${Math.random() * 100}.${extension2}`, data2, (err) => {
            if (err)
                throw err;
            console.log('saved');
        });
        res.send('ok');
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = app;
//# sourceMappingURL=Upload.js.map
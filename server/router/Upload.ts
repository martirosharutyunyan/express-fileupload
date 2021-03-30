import express from 'express';
const app = express.Router();
import multer from 'multer';
import fs from 'fs';
const upload = multer()
import formidable, { IncomingForm } from 'formidable';

app.post('/fileupload',async (req, res):Promise<void>=>{
    try{
        // @ts-ignore
        const {file1,file2} = req.files
        const {fileName} = req.body
        console.log(file1,file2)
        const {name,data} = file1
        const {name:name2,data:data2} = file2
        const arr1 = name.split('.')
        const arr2 = name2.split('.')
        const extension1 = arr1[arr1.length-1]
        const extension2 = arr2[arr2.length-1]
        fs.writeFile(`./files/${fileName}${Math.random()*100}.${extension1}`,data,(err:Error):void=>{
            if(err) throw err
            console.log('saved')
        })
        fs.writeFile(`./files/${fileName}${Math.random()*100}.${extension2}`,data2,(err:Error):void=>{
            if(err) throw err
            console.log('saved')
        })
        res.send('ok')
    } catch(err:any){
        console.log(err)
    }
})

module.exports = app;
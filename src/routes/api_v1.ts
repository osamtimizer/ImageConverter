import express = require('express');
import multer = require('multer');
import mongoose = require('mongoose');
import admin = require('firebase-admin');

import IImageFile from '../interfaces/IImageFile'
const serviceKeys = require('../../.imageprocessingsample.json');
import IImageFileDocument from '../interfaces/IImageFileDocument'

import IImageProcessor from '../interfaces/IImageProcessor'
import ImageProcessor from '../modules/ImageProcessor'

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

admin.initializeApp({
    credential: admin.credential.cert(serviceKeys),
    databaseURL: "https://imageprocessingsample.firebaseio.com"
});

const storage = admin.storage();

router.get('/image', (req, res, next) => {
    res.send('get');
});

//受け取った画像ファイルを変換してmongooseに画像ファイル情報、Cloud Storageに画像そのものを保存
//mongooseの情報からCloud Storageの画像ファイルを引っ張れるようにする必要がある
//user名でフォルダ分け、ファイル名をmongoose側で持っておけば問題なさそう
router.post('/image', upload.single('test'), async(req, res, next) => {
    const body = req.body;
    const userId: string = body.id;
    const singleFile: IImageFile = req.file;
    const proc = new ImageProcessor(singleFile);
    const imageFile = await proc.execProc();
    const result = await imageFile.save();
    const bucket = storage.bucket();
    //TODO: new date to be rand
    bucket.upload('/' + userId + '/' + (new Date()).toString).then((values) => {
        values.forEach((v, i, arr) => {
            //v: value

        });
    });
    res.send("File Saved.");
});

export default router
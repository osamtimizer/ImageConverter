import express = require('express');
import mongoose = require('mongoose');
import BodyParser = require('body-parser');
import path = require('path')

import index from './routes/index'
import API_V1 from './routes/api_v1';

mongoose.connect('mongodb://localhost/test_imgcvt');
const db = mongoose.connection;

const app = express();

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "pug")

app.use(express.static(path.join(__dirname, 'public')))
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));
app.use('/', index);
app.use('/v1', API_V1);

app.listen(process.env.PORT || 3000);
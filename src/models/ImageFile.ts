import mongoose = require('mongoose');
import IImageFile from '../interfaces/IImageFile';
import IImageFileDocument from '../interfaces/IImageFileDocument';

const ImageFileSchema = new mongoose.Schema({

});

const ImageFileModel: mongoose.Model<IImageFileDocument> = mongoose.model("ImageFile", ImageFileSchema);

export default ImageFileModel
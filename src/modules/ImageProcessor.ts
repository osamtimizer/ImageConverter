import IImageProcessor from '../interfaces/IImageProcessor';
import IImageFile from '../interfaces/IImageFile';
import ImageFile from '../models/ImageFile';

class ImageProcessor implements IImageProcessor {

    private _imageFile: IImageFile;

    constructor(imageFile: IImageFile) {
        this._imageFile = imageFile;
    }

    //asyncをつけることでPromise<T>が確定し、return "test" でTがStringで確定する
    //今回はreturn new ImageFile() でPromise<ImageFile>が確定する
    async execProc() {
        return new ImageFile();
    }
}

export default ImageProcessor
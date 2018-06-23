import IFileUploader from '../interfaces/IFileUploader';
import IImageFile from '../interfaces/IImageFile';

export default class ImageFileUploader implements IFileUploader<IImageFile> {
    constructor(dest: object) {

    }

    async upload(file: IImageFile) {
        return "success";
    }
}
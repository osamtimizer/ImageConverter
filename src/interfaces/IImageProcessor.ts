import IImageFile from "./IImageFile";

interface IImageProcessor {
    execProc(): Promise<IImageFile>
}

export default IImageProcessor;
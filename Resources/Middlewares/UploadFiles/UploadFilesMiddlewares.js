import Multer from 'multer';
import Path from 'path';

// Set Storage Engine
const Storage = Multer.diskStorage({
    destination: (Request, File, Callback) => {
        Callback(null, './public/uploads');
    },
    filename: (Request, File, Callback) => {
        Callback(null, File.fieldname + '-' + Date.now() + Path.extname(File.originalname));
    }
});

// Init Uploading System
export const UploadFiles = Multer({
    storage: Storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});
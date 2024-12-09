import multer from "multer";

const diskStorageConfig = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadHandler = multer({ diskStorageConfig });

export default uploadHandler;

//extract file from api request and it will provide its path

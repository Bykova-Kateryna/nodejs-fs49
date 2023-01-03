const multer = require("multer");
const path = require("path");

const floderDir = path.join(__dirname, "../", "tmp");

const multerConfig = multer.diskStorage({
  destination: floderDir,
  filename: (req, file, cb) =>{
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: multerConfig,
})

module.exports = upload;
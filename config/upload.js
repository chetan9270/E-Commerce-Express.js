const multer = require("multer");

// Memory storage → stores file in RAM as Buffer
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,  // 5 MB limit (optional)
  }
});

module.exports = upload;

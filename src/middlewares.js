const multer = require('multer');

const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null, "uploads/")
  },
  filename:(req,file,cb) =>{
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const upload = multer({ storage: storage})



function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}



/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}

module.exports = {
  notFound,
  errorHandler,
  upload,
};

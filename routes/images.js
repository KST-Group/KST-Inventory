const express=require('express');
const imageController=require('../controllers/uploadController');
const imageUploader=require('../helpers/image-uploader');
const router=express.Router();
const multer=require('multer');
const path = require('path');

// const storage=multer.diskStorage({
//     destination:'.uploads',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// const upload=multer({
//     storage:storage,
// });

router.post('/upload',imageUploader.upload.single('image'),imageController.upload);
module.exports=router;
var express = require("express");
var router = express.Router();
var controller = require("../controllers/DeviceController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});


const upload=multer({
    storage:storage,
});
router.get("/", controller.getDeviceData);
router.post("/add", controller.addDevice);

//router.post("/add", upload.single('image'));

router.get("/id/:deviceId", controller.geDeviceDataById);
router.delete("/del", controller.deleteDevice);
router.get("/use", controller.getDeviceUsing);
router.put("/upstatus", controller.updateStatusDevice);
router.put('/update',controller.updateDevice);

module.exports = router;

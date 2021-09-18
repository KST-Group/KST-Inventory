function upload(req,res){
    if(req.file.filename){
        res.status(201).json({
            message:'Upload image successfully',
            url:req.file.filename,
        });
    }else{
        res.status(500).json({
            message:'Somthing went wrong',
            
        });
    }
}

module.exports={
    upload:upload,
}
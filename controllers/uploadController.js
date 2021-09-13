const upoads=(req,res)=>{
    if(req.file.filename){
        return res.send({error:true,url:req.file.filename,message:'Upload Successfully'});
    }else{
        return res.send({error:true,message:'Somthing went wrong'});
    }
}
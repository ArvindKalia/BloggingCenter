const multer=require("multer")

const storage=multer.diskStorage({
    destination:(request,fileInfo,callback)=>{
        callback(null,"storage/images")
    },
    filename:(request,fileInfo,callback)=>{
        callback(null,fileInfo.originalname)
    }
})

const multipart= multer({storage}).single("file")

module.exports=multipart;
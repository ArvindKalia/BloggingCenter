const express=require("express")
const router= express.Router()
const blogController= require("../controller/blog.controller")

router.get("/",(request,response)=>{
    blogController.findallData(request,response)
})
router.get("/:category",(request,response)=>{
    blogController.findaDatabyQuery(request,response)
})
router.post("/",(request,response)=>{
blogController.uploadData(request,response)
})
router.put("/",(request,response)=>{
    response.send("Put requested")
})
router.delete("/",(request,response)=>{
    response.send("Delete requested")
})

module.exports= router;
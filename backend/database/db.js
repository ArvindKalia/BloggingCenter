const mongo=require("mongoose")
const blogSchema= require("../model/blog.model")
const url= "mongodb://127.0.0.1:27017/blogJust"

mongo.connect(url)

const insertData=async(data)=>{
    const dataRes= await new blogSchema(data).save()
    return dataRes;
}

const findData=async()=>{
    const dataRes=await blogSchema.find()
    return dataRes
}

const findbyQuery=async(query)=>{
    console.log(query)
    const dataRes=await blogSchema.find(query)
    console.log(dataRes)
    return dataRes
}

module.exports={
    insertData,
    findData,
    findbyQuery
}  
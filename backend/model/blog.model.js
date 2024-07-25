const mongo= require("mongoose")
const { Schema } = mongo

const blogSchema = new Schema({
    title: {
        type:String,
        unique:true,
        required:[true,"Title field is required"]

    },
    category: String,
    description: {
        type:String,
        required:[true,"Description field is required"]

    },
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports= mongo.model("Blog", blogSchema)
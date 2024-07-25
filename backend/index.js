const express= require("express")
const server=express()
const cors= require("./middleware/cors.middleware")
const blogRouter=require("./routing/blog.routing")
const bodyParser= require("./middleware/bodyParser.middleware")
const multer=require("./middleware/multer.middleware")

server.use(cors)
server.use(bodyParser.urlEncoded)
server.use(bodyParser.jsonEncoded)
server.use(multer)

server.use("/storage", express.static(__dirname+"/storage"))
server.use("/blog", blogRouter)

server.listen(8080)
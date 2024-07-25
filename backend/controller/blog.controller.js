const database = require("../database/db")

const uploadData = async (request, response) => {
    if (!request.file) {
        response.status(404)
        response.json({
            type: "image-validation",
            message: "Please upload a file",
            field: "file"
        })
    }
    else {
        const data = request.body
        const fileInfo = request.file;
        data["image"] = fileInfo.destination + "/" + fileInfo.filename
        try {
            const insertRes = await database.insertData(data)
            response.status(200)
            response.json(insertRes)
        } catch (error) {
            let field = []
            response.status(409)
            if (error.code && error.code == 11000) {
                response.json({
                    type: "unique",
                    message: "Title field must be unique",
                    field: "title"
                })
            }
            else {
                // response.json(error.errors)
                for (let key in error.errors) {
                    field.push({
                        field: key,
                        message: error.errors[key].message
                    })
                }
                response.json({
                    type: "required",
                    field: field
                })
            }
        }

    }
}

const findallData = async (request, response) => {
    const findRes = await database.findData()
    if (findRes.length != 0) {
        response.status(200)
        response.json(findRes)
    }
    else {
        response.status(404)
        response.json({
            message: "Data not found"
        })
    }
}

const findaDatabyQuery = async (request, response) => {
    const query = {
        category: request.params.category
    }
    const findRes = await database.findbyQuery(query)
    if (findRes.length != 0) {
        response.status(200)
        response.json(findRes)
    }
    else {
        response.status(404)
        response.json({
            message: "Data not found"
        })
    }

}

module.exports = {
    uploadData,
    findallData,
    findaDatabyQuery
}
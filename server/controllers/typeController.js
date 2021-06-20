const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController{
    async create(req, res){
        const {name} = req.body
        let type_in_table = await Type.findOne({
            where: {name}
        })
        if (type_in_table){
            return res.json("Type with this name already exists")
        }
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res){
        const types = await Type.findAll();
        return res.json(types);
    }
}

module.exports = new TypeController()
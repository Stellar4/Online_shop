const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController{
    async create(req, res){
        const {name} = req.body
        let brand_in_table = await Brand.findOne({
            where: {name}
        })
        if (brand_in_table){
            return res.json("Brand with this name already exists")
        }
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()
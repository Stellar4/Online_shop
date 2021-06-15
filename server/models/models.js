// define shopping_cart basket, shopping_cart_product basket_device, product device
const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})


const ShoppingCart = sequelize.define('shopping_cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


const ShoppingCartProduct = sequelize.define('shopping_cart_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})


const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})


const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})


const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})


const ProductInfo = sequelize.define('product_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})


const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(ShoppingCart)
ShoppingCart.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

ShoppingCart.hasMany(ShoppingCartProduct)
ShoppingCartProduct.belongsTo(ShoppingCart)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(ShoppingCartProduct)
ShoppingCartProduct.belongsTo(Product)

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})


module.exports = {
    User,
    ShoppingCart,
    ShoppingCartProduct,
    Product,
    Type,
    Brand,
    Rating,
    ProductInfo
}
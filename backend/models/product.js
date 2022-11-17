"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Category, {
                foreignKey: "categoryId",
            });
        }
    }
    Product.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.FLOAT,
            stock: DataTypes.INTEGER,
            isActive: DataTypes.BOOLEAN,
            categoryId: DataTypes.INTEGER,
            imageUrl: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
            tableName: "Products",
        }
    );
    return Product;
};

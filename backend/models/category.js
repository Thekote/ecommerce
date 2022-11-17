"use strict";
const { Model } = require("sequelize");
const product = require("./product");
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Product, {
                foreignKey: "categoryId",
            });
        }
    }
    Category.init(
        {
            description: DataTypes.STRING,
            cod: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Category",
            tableName: "Categories",
        }
    );
    return Category;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Service extends Model {
        static associate(models) {
            Service.belongsTo(models.User, {
                foreignKey: "userId",
            });
        }
    }
    Service.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.FLOAT,
            area: DataTypes.STRING,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Service",
            tableName: "Services",
        }
    );
    return Service;
};

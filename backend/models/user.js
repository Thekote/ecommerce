"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Service, {
                foreignKey: "userId",
            });
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            fullName: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "Users",
        }
    );
    return User;
};

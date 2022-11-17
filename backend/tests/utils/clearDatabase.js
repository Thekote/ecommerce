const { Category, Product } = require("../../models");

const clearDatabase = async () => {
    await Product.sync({
        force: true,
    });

    await Category.sync({
        force: true,
    });
};

module.exports = clearDatabase;

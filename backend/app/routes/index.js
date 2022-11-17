const { json } = require("express");

const products = require("./product.js");
const categories = require("./category");

module.exports = (app) => {
    app.use(json(), products, categories);
};

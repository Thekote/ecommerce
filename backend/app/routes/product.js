const { Router } = require("express");
const productController = require("../controllers/product.js");

const router = Router();

router
    .post("/product", productController.createProduct)
    .get("/product", productController.listProduct)
    .get("/product/:id", productController.findOneProduct)
    .put("/product/:id", productController.updateProduct)
    .patch("/product/:id/enable", productController.enableProduct)
    .patch("/product/:id/disable", productController.disableProduct);

module.exports = router;

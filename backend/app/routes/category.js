const { Router } = require("express");
const categoryController = require("../controllers/category.js");

const router = Router();

router
    .post("/category", categoryController.createCategory)
    .get("/category", categoryController.listCategories)
    .get("/category/:id", categoryController.findOneCategory)
    .put("/category/:id", categoryController.updateCategory)
    .patch("/category/:id/enable", categoryController.enableCategory)
    .patch("/category/:id/disable", categoryController.disableCategory);

module.exports = router;

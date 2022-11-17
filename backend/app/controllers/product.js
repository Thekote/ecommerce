const { Product } = require("../../models");
const productValidator = require("../validators/Product");

const createProduct = async (req, res) => {
    try {
        await productValidator.validate(req.body);
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const listProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        return res.json(products);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const findOneProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id } });

        if (!product) {
            return res.sendStatus(404);
        }

        return res.json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const value = await productValidator.validate(req.body);
        const { id } = req.params;
        const [updated] = await Product.update(value, {
            where: { id: id },
        });
        if (updated) {
            const updatedProduct = await Product.findOne({ where: { id: id } });
            return res.status(200).json({ updatedProduct });
        }
        throw new Error("Product not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const enableProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id } });
        product.isActive = true;
        await product.save();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const disableProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id } });
        product.isActive = false;
        await product.save();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    listProduct,
    findOneProduct,
    updateProduct,
    enableProduct,
    disableProduct,
};

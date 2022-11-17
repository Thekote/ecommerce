const { Category } = require("../../models");
const categoryValidator = require("../validators/Category");

const createCategory = async (req, res) => {
    try {
        await categoryValidator.validate(req.body);
        const category = await Category.create(req.body);
        return res.status(201).json({
            category,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const listCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        return res.json(categories);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const findOneCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: { id: req.params.id },
        });
        return res.json(category);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const value = await categoryValidator.validate(req.body);
        const { id } = req.params;
        const [updated] = await Category.update(value, {
            where: { id: id },
        });
        if (updated) {
            const updatedCategory = await Category.findOne({
                where: { id: id },
            });
            return res.status(200).json({ updatedCategory });
        }
        throw new Error("Category not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const enableCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: { id: req.params.id },
        });
        category.isActive = true;
        await category.save();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const disableCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: { id: req.params.id },
        });
        category.isActive = false;
        await category.save();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createCategory,
    listCategories,
    findOneCategory,
    updateCategory,
    enableCategory,
    disableCategory,
};

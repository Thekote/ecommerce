const yup = require("yup");

const productValidator = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required().positive(),
    stock: yup.number().required().positive().integer(),
    isActive: yup.boolean().required(),
    categoryId: yup.number().required().positive().integer(),
});

module.exports = productValidator;

const yup = require("yup");

const categoryValidator = yup.object().shape({
    description: yup.string().required(),
    cod: yup.string().required().max(3).strict().uppercase(),
    isActive: yup.boolean().required(),
});

module.exports = categoryValidator;

const productValidator = require("../../app/validators/Product");

const mockedValidProduct = {
    title: "tituloTeste",
    description: "description test",
    price: 100,
    stock: 50,
    isActive: true,
    categoryId: 2,
};
describe("Product Validator", () => {
    describe("When product is valid", () => {
        it("should not throw an error", async () => {
            await expect(() =>
                productValidator.validate(mockedValidProduct, {
                    abortEarly: false,
                })
            ).resolves;
        });
    });

    describe("When product is empty", () => {
        it("should throw an error", async () => {
            await expect(() =>
                productValidator.validate({}, { abortEarly: false })
            ).rejects.toThrow("6 errors occurred");
        });
    });

    describe("Title", () => {
        it("should throw an error when title is empty", async () => {
            const product = {
                ...mockedValidProduct,
                title: "",
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("title is a required field");
        });
    });

    describe("Description", () => {
        it("should throw an error when description is empty", async () => {
            const product = {
                ...mockedValidProduct,
                description: "",
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("description is a required field");
        });

        it("should throw an error when description is not a string", async () => {
            const product = {
                ...mockedValidProduct,
                description: null,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow(
                "description must be a `string` type, but the final value was: `null`."
            );
        });
    });

    describe("Price", () => {
        it("should throw an error when price is empty", async () => {
            const product = {
                ...mockedValidProduct,
                price: undefined,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("price is a required field");
        });

        it("should throw an error when price is not a number", async () => {
            const product = {
                ...mockedValidProduct,
                price: "",
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow(
                'price must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
            );
        });

        it("should throw an error when price is negative", async () => {
            const product = {
                ...mockedValidProduct,
                price: -50,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("price must be a positive number");
        });
    });

    describe("Stock", () => {
        it("should throw an error when stock is empty", async () => {
            const product = {
                ...mockedValidProduct,
                stock: undefined,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("stock is a required field");
        });

        it("should throw an error when stock is not a number", async () => {
            const product = {
                ...mockedValidProduct,
                stock: "",
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow(
                'stock must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
            );
        });

        it("should throw an error when stock is negative", async () => {
            const product = {
                ...mockedValidProduct,
                stock: -50,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("stock must be a positive number");
        });

        it("should throw an error when stock is not an integer", async () => {
            const product = {
                ...mockedValidProduct,
                stock: 25.5,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("stock must be an integer");
        });
    });

    describe("IsActive", () => {
        it("should throw an error when isActive is empty", async () => {
            const product = {
                ...mockedValidProduct,
                isActive: undefined,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("isActive is a required field");
        });

        it("should throw an error when isActive is not a boolean", async () => {
            const product = {
                ...mockedValidProduct,
                isActive: "",
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow(
                'isActive must be a `boolean` type, but the final value was: `""`'
            );
        });
    });

    describe("CategoryId", () => {
        it("should throw an error when categoryId is empty", async () => {
            const product = {
                ...mockedValidProduct,
                categoryId: undefined,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("categoryId is a required field");
        });

        it("should throw an error when categoryId is not a number", async () => {
            const product = {
                ...mockedValidProduct,
                categoryId: "",
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow(
                'categoryId must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
            );
        });

        it("should throw an error when categoryId is negative", async () => {
            const product = {
                ...mockedValidProduct,
                categoryId: -50,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("categoryId must be a positive number");
        });

        it("should throw an error when categoryId is not an integer", async () => {
            const product = {
                ...mockedValidProduct,
                categoryId: 25.5,
            };
            await expect(() =>
                productValidator.validate(product, { abortEarly: false })
            ).rejects.toThrow("categoryId must be an integer");
        });
    });
});

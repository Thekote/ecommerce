const categoryValidator = require("../../app/validators/Category");

const mockedValidCategory = {
    description: "description test",
    cod: "AAA",
    isActive: true,
};

describe("Category Validator", () => {
    describe("When category is valid", () => {
        it("should not throw an error", async () => {
            await expect(() =>
                categoryValidator.validate(mockedValidCategory, {
                    abortEarly: false,
                })
            ).resolves;
        });
    });

    describe("When category is empty", () => {
        it("should throw an error", async () => {
            await expect(() =>
                categoryValidator.validate({}, { abortEarly: false })
            ).rejects.toThrow("3 errors occurred");
        });
    });

    describe("Description", () => {
        it("should throw an error when description is empty", async () => {
            const category = {
                ...mockedValidCategory,
                description: "",
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow("description is a required field");
        });

        it("should throw an error when description is not a string", async () => {
            const category = {
                ...mockedValidCategory,
                description: null,
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow(
                "description must be a `string` type, but the final value was: `null`."
            );
        });
    });

    describe("Cod", () => {
        it("should throw an error when cod is empty", async () => {
            const category = {
                ...mockedValidCategory,
                cod: "",
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow("cod is a required field");
        });

        it("should throw an error when cod is not a string", async () => {
            const category = {
                ...mockedValidCategory,
                cod: null,
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow(
                "cod must be a `string` type, but the final value was: `null`."
            );
        });

        it("should throw an error when cod has more than 3 characters", async () => {
            const category = {
                ...mockedValidCategory,
                cod: "AAAA",
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow("cod must be at most 3 characters");
        });

        it("should throw an error when cod is not an upper case string", async () => {
            const category = {
                ...mockedValidCategory,
                cod: "aaa",
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow("cod must be a upper case string");
        });
    });

    describe("IsActive", () => {
        it("should throw an error when isActive is empty", async () => {
            const category = {
                ...mockedValidCategory,
                isActive: undefined,
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow("isActive is a required field");
        });

        it("should throw an error when isActive is not a boolean", async () => {
            const category = {
                ...mockedValidCategory,
                isActive: "",
            };
            await expect(() =>
                categoryValidator.validate(category, { abortEarly: false })
            ).rejects.toThrow(
                'isActive must be a `boolean` type, but the final value was: `""`'
            );
        });
    });
});

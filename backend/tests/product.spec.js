const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const { randomUUID } = require("crypto");
const { Category, Product } = require("../models");
const clearDatabase = require("./utils/clearDatabase");

describe("ProductController", () => {
    let category = null;
    const getMockedProduct = (category) => ({
        title: randomUUID(),
        description: randomUUID(),
        price: Math.round(Math.random() * 10 * 100) / 100,
        stock: Math.floor(Math.random() * 10) + 1,
        isActive: true,
        categoryId: category.id,
    });

    beforeEach(async () => {
        await clearDatabase();

        category = await Category.create({
            description: randomUUID(),
            cod: "AAA",
            isActive: true,
        });
    });

    afterAll(async () => {
        await clearDatabase();
    });

    describe("create", () => {
        it("should create a product", async () => {
            const product = getMockedProduct(category);

            await request
                .post("/product")
                .send(product)
                .expect(async (res) => {
                    expect(res.status).toBe(200);
                    expect(res.body).toHaveProperty("id");

                    const createdProduct = await Product.findOne({
                        where: { id: res.body.id },
                    });

                    expect(createdProduct).toStrictEqual(
                        expect.objectContaining(product)
                    );
                });
        });

        it("should fail if missing title property", async () => {
            const product = getMockedProduct(category);

            delete product.title;

            await request
                .post("/product")
                .send(product)
                .expect(async (res) => {
                    expect(res.status).toBe(500);
                });
        });

        it("should fail if missing description property", async () => {
            const product = getMockedProduct(category);

            delete product.description;

            await request
                .post("/product")
                .send(product)
                .expect(async (res) => {
                    expect(res.status).toBe(500);
                });
        });

        it("should fail if missing price property", async () => {
            const product = getMockedProduct(category);

            delete product.price;

            await request
                .post("/product")
                .send(product)
                .expect(async (res) => {
                    expect(res.status).toBe(500);
                });
        });

        it("should fail if price is negative", async () => {
            const product = getMockedProduct(category);

            await request
                .post("/product")
                .send({
                    ...product,
                    price: -1.0,
                })
                .expect(async (res) => {
                    expect(res.status).toBe(500);
                });
        });
    });

    describe("read", () => {
        it("should return an existing product", async () => {
            const product = await Product.create(getMockedProduct(category));

            await request.get(`/product/${product.id}`).expect((res) => {
                expect(res.status).toBe(200);
            });
        });

        it("should return 404 if id is invalid", async () => {
            await request.get("/product/1").expect((res) => {
                expect(res.status).toBe(404);
            });
        });
    });

    describe("update", () => {
        it("should return 200 if product was correctly updated ", async () => {
            const product = await Product.create(getMockedProduct(category));

            await request
                .put(`/product/${product.id}`)
                .send({
                    title: "updatedTitle",
                    description: "updatedDescription",
                    price: 200,
                    stock: 100,
                    isActive: true,
                    categoryId: category.id,
                })
                .expect(async (res) => {
                    expect(res.status).toBe(200);
                });
        });

        it("should fail if categoryId property is missing ", async () => {
            const product = await Product.create(getMockedProduct(category));

            await request
                .put(`/product/${product.id}`)
                .send({
                    title: "updatedTitle",
                    description: "updatedDescription",
                    price: 200,
                    stock: 100,
                    isActive: true,
                })
                .expect(async (res) => {
                    expect(res.status).toBe(500);
                    expect(res.text).toBe("categoryId is a required field");
                });
        });

        it("should fail if stock is negative ", async () => {
            const product = await Product.create(getMockedProduct(category));

            await request
                .put(`/product/${product.id}`)
                .send({
                    title: "updatedTitle",
                    description: "updatedDescription",
                    price: 200,
                    stock: -100,
                    isActive: true,
                    categoryId: product.categoryId,
                })
                .expect(async (res) => {
                    expect(res.status).toBe(500);
                    expect(res.text).toBe("stock must be a positive number");
                });
        });
    });
});

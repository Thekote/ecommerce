import http from "../http-common.js"

class ProductDataService {
  static getAll() {
    return http.get("/products")
  }

  static get(id) {
    return http.get(`/products/${id}`)
  }

  static create(data) {
    return http.post("/product", data)
  }

  static update(id, data) {
    return http.put(`/products/${id}`, data)
  }
}

export default ProductDataService

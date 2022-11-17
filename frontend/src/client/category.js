import http from "../http-common.js"

class CategoryDataService {
  static getAll() {
    return http.get("/categories")
  }

  static get(id) {
    return http.get(`/categories/${id}`)
  }

  static create(data) {
    return http.post("/category/", data)
  }

  static update(id, data) {
    return http.put(`/categories/${id}`, data)
  }
}

export default CategoryDataService

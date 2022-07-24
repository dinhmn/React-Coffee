import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8088/api/p1/product";
class ProductService {
  saveProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL, product);
  }
  getAllProduct() {
    return axios.get(PRODUCT_API_BASE_URL);
  }
  deleteProduct(id) {
    return axios.delete(PRODUCT_API_BASE_URL + "/" + id);
  }
  getProductById(id) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + id);
  }
  updateProductById(product, id) {
    return axios.put(PRODUCT_API_BASE_URL + "/" + id, product);
  }
}
export default new ProductService();

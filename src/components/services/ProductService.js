import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/p1/product";
class ProductService {
  saveProduct(formData) {
    return axios.post(PRODUCT_API_BASE_URL, formData).then((res) => {
      console.log(res);
    });
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
  updateProductById(id, formData) {
    return axios.put(PRODUCT_API_BASE_URL + "/" + id, formData);
  }
}
export default new ProductService();

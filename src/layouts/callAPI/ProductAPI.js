import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8088/api/p1/product";

class ProductAPI {
  getAllProduct() {
    return axios.get(PRODUCT_API_BASE_URL);
  }
}
export default ProductAPI;

import axios from "axios";

const IMAGE_API_BASE_URL = "http://localhost:8080/upload";

class ImageService {
  saveImage(formData) {
    console.log(formData);
    return axios.post(IMAGE_API_BASE_URL, formData);
  }
  getAllImage(formData) {
    return axios.get(IMAGE_API_BASE_URL);
  }
  deleteImageProduct(id) {
    return axios.delete(IMAGE_API_BASE_URL + "/" + id);
  }
  updateImageById(formData, id) {
    return axios.put(IMAGE_API_BASE_URL + "/" + id, formData);
  }
}
export default new ImageService();

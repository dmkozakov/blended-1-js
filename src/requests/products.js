import { instance } from "../services/api";

export async function fetchAllProducts() {
  return await instance.get("/products");
}

export async function fetchSingleProduct(id) {
  return await instance.get(`/products/${id}`);
}

export async function addNewProduct(newProduct) {
  return await instance.post(`/products/add`, newProduct);
}
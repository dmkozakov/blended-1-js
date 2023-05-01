import { instance } from '../services/api';

export async function fetchAllProducts() {
  return await instance.get('/products');
}

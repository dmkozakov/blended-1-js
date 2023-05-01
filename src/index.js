import './styles/normalize.css';
import './styles/index.css';
import { fetchAllProducts } from './requests/products';
import { createMarkup } from './services/markupService';

const productContainer = document.querySelector('#allProducts');
console.log(productContainer);

async function gettAllProducts() {
  const {
    data: { products },
  } = await fetchAllProducts();
  const markup = createMarkup(products);
  productContainer.insertAdjacentHTML('beforeend', markup);
}

gettAllProducts();

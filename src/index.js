import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllProducts } from "./requests/products";
import { createMarkup } from "./services/markupService";

import { fetchSingleProduct } from "./requests/products";
import { createSingleProductMarkup } from "./services/markupService";

const productContainer = document.querySelector("#allProducts");
console.log(productContainer);

async function gettAllProducts() {
  const {
    data: { products },
  } = await fetchAllProducts();
  const markup = createMarkup(products);
  productContainer.insertAdjacentHTML("beforeend", markup);
}

// gettAllProducts();

const singleProductForm = document.querySelector("#singleProductForm");

const singleProductContainer = document.querySelector("#singleProduct");

singleProductForm.addEventListener("submit", singleProductSubmitHandler);

async function singleProductSubmitHandler(e) {
  e.preventDefault();
  const idValue = e.target.elements.id.value;

  if (idValue >= 1 && idValue <= 100) {
    try {
      const { data } = await fetchSingleProduct(idValue);
      const singleProductMarkup = createSingleProductMarkup(data);

      singleProductContainer.innerHTML = singleProductMarkup;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("enter valid value");
  }
}

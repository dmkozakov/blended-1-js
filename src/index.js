import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllProducts } from "./requests/products";
import { createMarkup } from "./services/markupService";

import { fetchSingleProduct } from "./requests/products";
import { createSingleProductMarkup } from "./services/markupService";
import { addNewProduct } from "./requests/products";
import { createNewProductMarkup } from "./services/markupService";

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

const newProductForm = document.querySelector("#newProductForm");

const newProductContainer = document.querySelector("#newProductSection");

newProductForm.addEventListener("submit", renderNewProdukt);

// singleProductForm.addEventListener("submit", singleProductSubmitHandler);

// async function singleProductSubmitHandler(e) {
//   e.preventDefault();
//   const idValue = e.target.elements.id.value;

//   if (idValue >= 1 && idValue <= 100) {
//     try {
//       const { data } = await fetchSingleProduct(idValue);
//       const singleProductMarkup = createSingleProductMarkup(data);

//       singleProductContainer.innerHTML = singleProductMarkup;
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     alert("enter valid value");
//   }
// }

async function renderNewProdukt(e) {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const description = e.target.elements.description.value;
  const price = e.target.elements.price.value;

  const { data } = await addNewProduct({ title, description, price });

  const markup = createNewProductMarkup(data);

  newProductContainer.innerHTML = markup;
}

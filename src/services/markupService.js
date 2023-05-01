export function createMarkup(data) {
  return data
    .map(
      ({ brand, category, description, images }) => `
    <li>
      <img src="${images[0]}" alt="${category}" />
      <h2${brand}h2>
      <p>${category}</p>
      <p>${description}</p>
    </li>`
    )
    .join("");
}

export function createSingleProductMarkup({
  brand,
  category,
  description,
  images,
}) {
  return `
  <div>
    <img src="${images[0]}" alt="${category}" />
    <h2${brand}h2>
    <p>${category}</p>
    <p>${description}</p>
  </div>`;
}

export function createNewProductMarkup(
  {title, description, price}
) {
  
  return `
  <div>
    <h2>${title}</h2>
    <p>${price}</p>
    <p>${description}</p>
  </div>`;
}
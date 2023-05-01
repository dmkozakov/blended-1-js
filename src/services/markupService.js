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
    .join('');
}

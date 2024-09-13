import { Product } from './interface/products/products';

export class RenderProduct implements Product {
  public renderProductList(products: any): string {
    return `
     <ul id="product-list">
        ${products
          .map(
            (product: any) => `
          <li data-id="${product.id}">
         <img src="${product.images[0]}" alt="" style="width: 500px;" />
            <h2>${product.title}</h2>
            <p>${product.price}$</p>
          </li>`
          )
          .join('')}
      </ul>
    `;
  }
}

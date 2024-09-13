import { Fetch } from './request/request';
import { RummagingObject } from './parseObject/rummagingObject/rummagingObject';
import { RenderProduct } from './renderProducts/renderAllProducts/RenderAllProducts';
import { ProductSelection } from './productSelection/productSelection/productSelection';

const fetchInstance = new Fetch('https://dummyjson.com/products');

async function getProductById(productId: number) {
  try {
    const response = await fetchInstance.getProduct(productId);
    const product = await response.json();
    console.log('Product:', product);
  } catch (error) {
    console.error('Failed to fetch product:', error);
  }
}

async function processFetchAndParse() {
  try {
    const response = await fetchInstance.getProducts();
    const data = await response.json();

    console.log('Fetch', data);

    const parse = new RummagingObject(data);
    const products = parse.takingProducts();

    console.log(' Products:', products);

    const renderProduct = new RenderProduct();
    const renderedHTML = renderProduct.renderProductList(products);

    const productListElement = document.getElementById('products');

    if (productListElement) {
      productListElement.innerHTML = renderedHTML;

      new ProductSelection('products', getProductById);
    } else {
      console.error('id not found.');
    }

    return parse;
  } catch (error) {
    console.error('Request failed', error);
  }
}

processFetchAndParse();

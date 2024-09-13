import { Product } from '../interface/product/product';

export class ProductSelection implements Product {
  private list: HTMLElement | null;

  constructor(listId: string, onProductSelect: (productId: number) => void) {
    this.list = document.getElementById(listId);

    if (this.list) {
      this.list.addEventListener('click', event =>
        this.handleClick(event, onProductSelect)
      );
    } else {
      console.error(`Element with ID "${listId}" not found.`);
    }
  }

  public handleClick(
    event: MouseEvent,
    onProductSelect: (productId: number) => void
  ) {
    const target = event.target as HTMLElement;
    const listItem = target.closest('li');

    if (listItem && listItem.getAttribute('data-id')) {
      const productId = Number(listItem.getAttribute('data-id'));
      onProductSelect(productId);
    }
  }
}

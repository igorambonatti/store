export function addProduct(product) {
  return {
    type: '@cart/ADD_PRODUCT',
    product,
  };
}

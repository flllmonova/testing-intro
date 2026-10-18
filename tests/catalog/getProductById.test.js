const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    const id = 1;
    const productId1 = products[0];
    expect(getProductById(products, id)).toEqual(productId1);
  });

  test('ID 4 возвращает products[3]', () => {
    const id = 4;
    const productId4 = products[3];
    expect(getProductById(products, id)).toEqual(productId4);
  });

  test('ID 6 возвращает products[5]', () => {
    const id = 6;
    const productId6 = products[5];
    expect(getProductById(products, id)).toEqual(productId6);
  });

  test('ID 0 возвращает null', () => {
    const id = 0;
    expect(getProductById(products, id)).toBeNull();
  });

  test('ID 999 возвращает null', () => {
    const id = 999;
    expect(getProductById(products, id)).toBeNull();
  });

  test('ID -1 возвращает null', () => {
    const id = -1;
    expect(getProductById(products, id)).toBeNull();
  });

  test("строковый ID '1' возвращает null", () => {
    const id = "1";
    expect(getProductById(products, id)).toBeNull();
  });

  test('ID undefined возвращает null', () => {
    const id = undefined;
    expect(getProductById(products, id)).toBeNull();
  });

  test('ID NaN возвращает null', () => {
    const id = NaN;
    expect(getProductById(products, id)).toBeNull();
  });
});

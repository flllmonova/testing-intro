const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const query = "Наушники";
    const productId1 = [products.find((product) => product.id === 1)];
    expect(searchProducts(products, query)).toEqual(productId1);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const query = "Чистый код";
    const productId6 = [products.find((product) => product.id === 6)];
    expect(searchProducts(products, query)).toEqual(productId6);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const query = "Настольная лампа";
    const productId4 = [products.find((product) => product.id === 4)];
    expect(searchProducts(products, query)).toEqual(productId4);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const query = "javascript";
    const productId3 = [products.find((product) => product.id === 3)];
    expect(searchProducts(products, query)).toEqual(productId3);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const query = "ЧЕХОЛ";
    const productId5 = [products.find((product) => product.id === 5)];
    expect(searchProducts(products, query)).toEqual(productId5);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const query = "наушники";
    const productId1 = [products.find((product) => product.id === 1)];
    expect(searchProducts(products, query)).toEqual(productId1);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = "";
    expect(searchProducts(products, query).map((product) => product.id))
      .toEqual([1, 2, 3, 4, 5, 6]); 
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = "       ";
    expect(searchProducts(products, query).map((product) => product.id))
      .toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '\t\n';
    expect(searchProducts(products, query).map((product) => product.id))
      .toEqual([1, 2, 3, 4, 5, 6]);
  });
});

function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity === 0) {
    throw new RangeError('Невозможно добавить нулевое количество товара.');
  }

  if (quantity > product.stock) {
    throw new RangeError('Невозможно добавить больше товара, чем есть на складе.');
  }

  if (cart.length === 0) {
    return [{ ...product, quantity: quantity }];
  }

  const productInCart = cart.find((productInCart) => productInCart.id === product.id);
  if (productInCart) {
    productInCart.quantity += quantity;
  } else {
    cart.push({...product, quantity: quantity });
  }

  return cart;
}

function changeQuantity(cart, productId, quantity) {
  if (quantity === 0) {
    throw new RangeError("Количество товара не должно быть нулевым.");
  }

  const productInCart = cart.find((product) => product.id === productId);

  if (productInCart) {
    if (quantity > productInCart.stock) {
      throw new RangeError("Невозможно указать количество больше остатка.");
    }

    productInCart.quantity = quantity;
  }

  return cart;
}

function removeFromCart(cart, productId) {
  const productInCart = cart.find((product) => product.id === productId);

  if (productInCart) {
    const productIndex = cart.indexOf(productInCart);
    cart.splice(productIndex, 1);
  }

  return cart;
}

function calculateCartSubtotal(cart) {
  if (cart.length === 0) return 0;

  let sum = 0;

  cart.forEach((item) => sum += item.price * item.quantity);

  return sum;
}

function calculateOrderTotal(cart, promocode) {
  const subtotal = calculateCartSubtotal(cart);
  const discount = (promocode === 'SAVE10' && subtotal >= 20000) ? Math.floor(subtotal / 10) : 0;
  const delivery = (subtotal >= 50000) ? 0 : 30000;
  const total = subtotal - discount + delivery;
  const order = {
    subtotal: subtotal,
    discount: discount,
    delivery: delivery,
    total: total,
  };

  return order;
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

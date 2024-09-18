export default {
  increaseCount(state, itemName) {
    const item = state.items.find((i) => i.name === itemName);
    if (item) {
      item.count++;
    }
  },
  decreaseCount(state, itemName) {
    const item = state.items.find((i) => i.name === itemName);
    if (item && item.count > 0) {
      item.count--;
    }
  },
  ADD_PRODUCT(state, product) {
    state.products.push(product)
  },
};

export default {
  items: (state) => state.items,
  items_size: (state) => state.items.length,
  totalPrice: (state) =>
    state.items.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0),
};

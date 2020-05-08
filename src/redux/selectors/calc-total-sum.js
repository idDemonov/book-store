export const calcTotalSum = (basket) => {
  return basket.reduce((acc, book) => (acc += book.price * book.count), 0);
};

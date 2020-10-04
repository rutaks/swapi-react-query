export const numberWithCommas = (numberStr) => {
  try {
    const number = parseInt(numberStr);
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (error) {
    return null;
  }
};

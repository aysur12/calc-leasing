const validateDownPaymentInput = (downPaymentInput, priceInput, slider) => {
  const value = downPaymentInput.value.replace(/\s/g, '');
  const intValue = parseInt(value, 10);

  priceAmount = priceInput.value.replace(/\s/g, '');
  priceValue = parseInt(priceAmount, 10);
  const minValue = Math.round(priceValue * 0.1);
  const maxValue = Math.round(priceValue * 0.6);

  if (intValue < minValue) {
    downPaymentInput.value = minValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else if (intValue > maxValue) {
    downPaymentInput.value = maxValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else {
    downPaymentInput.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  slider.value = intValue;
};

export default validateDownPaymentInput;

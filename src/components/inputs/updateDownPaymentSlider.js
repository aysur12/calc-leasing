const updateDownPaymentSlider = (slider, input, priceInput) => {
  priceAmount = priceInput.value.replace(/\s/g, '');
  priceValue = parseInt(priceAmount, 10);
  const minValue = Math.round(priceValue * 0.1);
  const maxValue = Math.round(priceValue * 0.6);

  slider.min = minValue.toString();
  slider.max = maxValue.toString();

  const value = slider.value;
  input.value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default updateDownPaymentSlider;

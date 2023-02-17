const setRangeDownPaymentSlider = (slider, priceInput) => {
  const priceAmount = priceInput.value.replace(/\s/g, '');
  const priceValue = parseInt(priceAmount, 10);
  const minValue = Math.round(priceValue * 0.1);
  const maxValue = Math.round(priceValue * 0.6);

  slider.min = minValue.toString();
  slider.max = maxValue.toString();
};

export default setRangeDownPaymentSlider;

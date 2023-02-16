const updateDownPaymentSlider = (slider, input, priceInput) => {
  const value = slider.value.replace(/\s/g, '');
  const intValue = parseInt(value, 10);

  priceAmount = priceInput.value.replace(/\s/g, '');
  priceValue = parseInt(priceAmount, 10);
  const minValue = Math.round(priceValue * 0.1);
  const maxValue = Math.round(priceValue * 0.6);

  slider.min = minValue.toString();
  slider.max = maxValue.toString();

  if (intValue < minValue) {
    input.value = minValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else if (intValue > maxValue) {
    input.value = maxValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else {
    const sliderValue = slider.value;
    input.value = sliderValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
};

export default updateDownPaymentSlider;

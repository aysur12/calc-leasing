const validateNumber = (input, slider, minValue, maxValue) => {
  const value = input.value.replace(/\s/g, '');
  const intValue = parseInt(value, 10);
  if (intValue < minValue) {
    input.value = minValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else if (intValue > maxValue) {
    input.value = maxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else {
    input.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  slider.value = intValue;
};

export default validateNumber;

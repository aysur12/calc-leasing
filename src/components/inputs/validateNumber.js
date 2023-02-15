const validateNumber = (input, slider, minValue, maxValue) => {
  const value = input.value.replace(/\s/g, '');
  const intValue = parseInt(value, 10);
  if (intValue < minValue) {
    input.value = '1 500 000';
  } else if (intValue > maxValue) {
    input.value = '10 000 000';
  } else {
    input.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  slider.value = intValue;
};

export default validateNumber;

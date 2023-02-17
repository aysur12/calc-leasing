const updateNumber = (slider, input) => {
  const { value } = slider;
  input.value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default updateNumber;

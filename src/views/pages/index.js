const form = document.querySelector('.page__form');
const fieldInputs = document.querySelectorAll('.inputs__input');
const rangeInputs = document.querySelectorAll('.inputs__range-input');
const inputContainers = document.querySelectorAll('.inputs__container');

const vehiclePriceInput = document.getElementById('vehicle-price');
const downPaymentInput = document.getElementById('down-payment');
const leasingTermInput = document.getElementById('leasing-term');

const button = document.querySelector('.button');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fieldInputs.forEach((fieldInput) => (fieldInput.disabled = true));
  rangeInputs.forEach((rangeInput) => (rangeInput.disabled = true));
  button.disabled = true;

  inputContainers.forEach((inputContainer) => {
    inputContainer.style.opacity = '0.4';
  });

  const formData = {
    vehiclePrice: vehiclePriceInput.value.replace(/\s/g, ''),
    downPayment: downPaymentInput.value.replace(/\s/g, ''),
    leasingTerm: leasingTermInput.value.replace(/\s/g, ''),
  };

  const jsonData = JSON.stringify(formData);

  alert(jsonData);
});

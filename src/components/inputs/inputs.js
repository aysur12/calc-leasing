import calculateMonthlyPayment from '../counter-block/calculateMonthlyPayment';
import calculateContractAmount from '../counter-block/calculateContractAmount';
import validateNumber from './validateNumber';
import updateNumber from './updateNumber';
import updateDownPaymentPercentage from './updateDownPaymentPercentage';
import validateDownPaymentInput from './validateDownPaymentInput';
import setRangeDownPaymentSlider from './setRangeDownPaymentSlider';
import addAutoWidthInput from './addAutoWidthInput';

const vehiclePriceInput = document.getElementById('vehicle-price');
const vehiclePriceSlider = document.getElementById('vehicle-price-range');

const downPaymentInput = document.getElementById('down-payment');
const downPaymentSlider = document.getElementById('down-payment-range');

const leasingTermInput = document.getElementById('leasing-term');
const leasingTermSlider = document.getElementById('leasing-term-range');

const percentDiv = document.querySelector('.inputs__percent');
const labelCreditAmount = document.querySelector(
  '.js-inputs__label_for_credit-amount'
);

window.addEventListener('resize',() => {
  if (window.innerWidth <= 767) {
    labelCreditAmount.textContent = 'Желаемая сумма кредита';
  } else {
    labelCreditAmount.textContent = 'Стоимость автомобиля';
  }
});

validateDownPaymentInput(
  downPaymentInput,
  vehiclePriceInput,
  downPaymentSlider
);
addAutoWidthInput(downPaymentInput);
setRangeDownPaymentSlider(downPaymentSlider, vehiclePriceInput);

vehiclePriceInput.addEventListener('change', () => {
  validateNumber(vehiclePriceInput, vehiclePriceSlider, 1500000, 10000000);
  calculateMonthlyPayment(
    vehiclePriceInput,
    downPaymentInput,
    leasingTermInput
  );
  calculateContractAmount(downPaymentInput, leasingTermInput);
});


vehiclePriceSlider.addEventListener('input', () => {
  updateNumber(vehiclePriceSlider, vehiclePriceInput);
  calculateMonthlyPayment(
    vehiclePriceInput,
    downPaymentInput,
    leasingTermInput
  );
  calculateContractAmount(downPaymentInput, leasingTermInput);
});

downPaymentInput.addEventListener('change', () => {
  validateDownPaymentInput(
    downPaymentInput,
    vehiclePriceInput,
    downPaymentSlider
  );
  addAutoWidthInput(downPaymentInput);
  updateDownPaymentPercentage(vehiclePriceInput, downPaymentInput, percentDiv);
  calculateMonthlyPayment(
    vehiclePriceInput,
    downPaymentInput,
    leasingTermInput
  );
  calculateContractAmount(downPaymentInput, leasingTermInput);
});

downPaymentInput.addEventListener('input', () => {
  addAutoWidthInput(downPaymentInput);
  updateDownPaymentPercentage(vehiclePriceInput, downPaymentInput, percentDiv);
});

downPaymentSlider.addEventListener('input', () => {
  setRangeDownPaymentSlider(downPaymentSlider, vehiclePriceInput);
  updateNumber(downPaymentSlider, downPaymentInput);
  addAutoWidthInput(downPaymentInput);
  updateDownPaymentPercentage(vehiclePriceInput, downPaymentInput, percentDiv);
  calculateMonthlyPayment(
    vehiclePriceInput,
    downPaymentInput,
    leasingTermInput
  );
  calculateContractAmount(downPaymentInput, leasingTermInput);
});

leasingTermInput.addEventListener('change', () => {
  validateNumber(leasingTermInput, leasingTermSlider, 6, 120);
  calculateMonthlyPayment(
    vehiclePriceInput,
    downPaymentInput,
    leasingTermInput
  );
  calculateContractAmount(downPaymentInput, leasingTermInput);
});

leasingTermSlider.addEventListener('input', () => {
  updateNumber(leasingTermSlider, leasingTermInput);
  calculateMonthlyPayment(
    vehiclePriceInput,
    downPaymentInput,
    leasingTermInput
  );
  calculateContractAmount(downPaymentInput, leasingTermInput);
});

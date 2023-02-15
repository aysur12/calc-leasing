import validateNumber from './validateNumber';
import updateNumber from './updateNumber';

const vehiclePriceInput = document.getElementById('vehicle-price');
const vehiclePriceSlider = document.getElementById('vehicle-price-range');

const downPaymentInput = document.getElementById('down-payment');
const downPaymentSlider = document.getElementById('down-payment-range');

const leasingTermInput = document.getElementById('leasing-term');
const leasingTermSlider = document.getElementById('leasing-term-range');

vehiclePriceInput.addEventListener('change', () => {
  validateNumber(vehiclePriceInput, vehiclePriceSlider, 1500000, 10000000);
});

vehiclePriceSlider.addEventListener('input', () => {
  updateNumber(vehiclePriceSlider, vehiclePriceInput);
});

leasingTermInput.addEventListener('change', () => {
  validateNumber(leasingTermInput, leasingTermSlider, 6, 120);
});

leasingTermSlider.addEventListener('input', () => {
  updateNumber(leasingTermSlider, leasingTermInput);
});
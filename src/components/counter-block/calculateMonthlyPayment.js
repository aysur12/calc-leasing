const calculateMonthlyPayment = (priceInput, downPaymentInput, leasingTermInput) => {
  const monthlyPaymentDiv = document.querySelector(
    '.js-counter-block__value_for_monthly-payment',
  );

  const priceValue = priceInput.value.replace(/\s/g, '');
  const price = parseInt(priceValue, 10);

  const downPaymentValue = downPaymentInput.value.replace(/\s/g, '');
  const downPayment = parseInt(downPaymentValue, 10);

  const termValue = leasingTermInput.value.replace(/\s/g, '');
  const term = parseInt(termValue, 10);

  const monthlyPaymentValue = ((price - downPayment) * (0.05 * (1 + 0.05) ** term))
    / ((1 + 0.05) ** term - 1);

  const roundedMonthPayment = Math.ceil(monthlyPaymentValue.toFixed(2));

  monthlyPaymentDiv.textContent = roundedMonthPayment
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default calculateMonthlyPayment;

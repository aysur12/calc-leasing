const calculateContractAmount = (downPaymentInput, leasingTermInput) => {
  const contractAmountDiv = document.querySelector(
    '.js-counter-block__value_for_contract-amount',
  );
  const monthlyPaymentDiv = document.querySelector(
    '.js-counter-block__value_for_monthly-payment',
  );
  const monthlyPaymentValue = parseInt(monthlyPaymentDiv.textContent, 10);

  const downPaymentValue = downPaymentInput.value.replace(/\s/g, '');
  const downPayment = parseInt(downPaymentValue, 10);

  const termValue = leasingTermInput.value.replace(/\s/g, '');
  const term = parseInt(termValue, 10);

  const contractAmountValue = downPayment + term * monthlyPaymentValue;
  const roundedContractAmount = Math.ceil(contractAmountValue.toFixed(2));

  contractAmountDiv.textContent = roundedContractAmount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export default calculateContractAmount;

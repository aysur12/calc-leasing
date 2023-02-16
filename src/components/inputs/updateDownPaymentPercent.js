const updateDownPaymentPercentage = (
  priceInput,
  downPaymentInput,
  percentageDiv
) => {
  const priceValue = priceInput.value.replace(/\s/g, '');
  const price = parseInt(priceValue, 10);
  const downPaymentValue = downPaymentInput.value.replace(/\s/g, '');
  const downPayment = parseInt(downPaymentValue, 10);
  const downPaymentPercentage = (downPayment / price) * 100;
  const roundedDownPaymentPercentage = Math.ceil(downPaymentPercentage.toFixed(2));

  if (roundedDownPaymentPercentage >= 10 && roundedDownPaymentPercentage<= 60) {
    percentageDiv.textContent = `${roundedDownPaymentPercentage}%`;
  } else if (roundedDownPaymentPercentage < 10) {
    percentageDiv.textContent = `10%`;
  } else if (roundedDownPaymentPercentage > 60) {
    percentageDiv.textContent = `60%`;
  }
};

export default updateDownPaymentPercentage;

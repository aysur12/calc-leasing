const updateDownPaymentPercentage = (
  priceInput,
  downPaymentInput,
  downPaymentSlider,
  percentageDiv,
  minPercent,
  maxPercent
) => {
  const price = parseFloat(priceInput.value, 10);
  const downPayment = parseInt(downPaymentInput.value, 10);
  const downPaymentPercentage = (downPayment / price) * 100;

  const roundedDownPaymentPercentage = Math.ceil(downPaymentPercentage);
  percentageDiv.textContent = `${roundedDownPaymentPercentage}%`;
};

export default updateDownPaymentPercentage;

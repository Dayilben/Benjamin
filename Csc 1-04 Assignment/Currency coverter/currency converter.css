const converterForm = document.getElementById('converter-form');
const amountInput = document.getElementById('amount');
const toCurrencySelect = document.getElementById('to-currency');
const resultParagraph = document.getElementById('result');

const currencyRates = {
    NGN: 415.00
};

converterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const amount = parseFloat(amountInput.value);

    const toRate = currencyRates[toCurrencySelect.value];

    const convertedAmount = (amount * toRate).toFixed(2);

    resultParagraph.textContent = ` ${amount} USD = ${convertedAmount} NGN`;
});
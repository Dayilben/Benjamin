const calculatorForm = document.getElementById('calculator-form');
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const resultParagraph = document.getElementById('result');

calculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value) / 100;
    const time = parseFloat(timeInput.value);

    const simpleInterest = (principal * rate * time).toFixed(2);

    resultParagraph.textContent = `Simple Interest: $${simpleInterest}`;
});
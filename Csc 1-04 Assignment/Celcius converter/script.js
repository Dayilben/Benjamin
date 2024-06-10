document.getElementById('convertButton').addEventListener('click', function() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('result').innerText = `Celsius: ${celsius.toFixed(2)}`;
});

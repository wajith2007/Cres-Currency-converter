document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('converter-form');
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const resultDiv = document.getElementById('result');

    const rates = {
        USD: 1,
        EUR: 0.93, // Example rate - replace with actual
        INR: 82.5,  // Example rate - replace with actual
        GBP: 0.80,  // Example rate - replace with actual
        JPY: 145,   // Example rate - replace with actual
        AUD: 1.50,  // Example rate - replace with actual
        SAR: 3.75,  // Example rate - replace with actual
        AED: 3.67,  // Example rate - replace with actual
        KWD: 0.31,  // Example rate - replace with actual
        CNY: 7.27,  // Example rate - replace with actual
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount)) {
            resultDiv.textContent = 'Please enter a valid amount.';
            return;
        }

        if (!rates[fromCurrency] || !rates[toCurrency]) {
            resultDiv.textContent = 'Invalid currency selected.';
            return;
        }

        const usdAmount = amount / rates[fromCurrency];
        const convertedAmount = usdAmount * rates[toCurrency];

        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

        
    });
});



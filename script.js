document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    let currentCalculation = '';

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentCalculation = '';
                result.value = '';
            } else if (value === '←') {
                currentCalculation = currentCalculation.slice(0, -1);
                result.value = currentCalculation;
            } else if (value === '=') {
                try {
                    currentCalculation = eval(currentCalculation).toString();
                    result.value = currentCalculation;
                } catch (error) {
                    result.value = 'Erreur';
                    currentCalculation = '';
                }
            } else {
                currentCalculation += value;
                result.value = currentCalculation;
            }
        });
    });
});

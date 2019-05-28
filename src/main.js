(function () {
    const button = document.querySelector('.submit-button');
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');

    const parser = new Parser();
    const calculator = new Calculator();

    button.addEventListener('click', onSubmitButtonClick);

    function onSubmitButtonClick(e) {
        e.preventDefault();

        const parsedList = parser.strToArrayOfNumbers(input.value);
        const calculatedSum = calculator.calculateMinsSum(parsedList);
        
        output.textContent = calculatedSum;
    }
})();
(function () {
    const button = document.querySelector('.form__button');
    const input = document.querySelector('.form__input');
    const output = document.querySelector('.form__output-text');

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
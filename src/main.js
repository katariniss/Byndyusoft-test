(function () {
    var button = document.querySelector('.submit-button');
    var input = document.querySelector('#input');

    var parser = new Parser();
    var calculator = new Calculator();

    button.addEventListener('click', onSubmitButtonClick);

    function onSubmitButtonClick(e) {
        e.preventDefault();

        var parserList = parser.strToArrayOfNumbers(input.value);

        console.log(calculator.calculateMinsSum(parserList));
    }
})();
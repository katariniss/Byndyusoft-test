(function () {
    var button = document.querySelector('.submit-button');
    var input = document.querySelector('#input');

    var calculator = new Calculator();

    button.addEventListener('click', onSubmitButtonClick);

    function onSubmitButtonClick(e) {
        e.preventDefault();
        console.log(calculator.calculateMinsSum(input.value));
        
    }
})();
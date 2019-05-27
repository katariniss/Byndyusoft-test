(function () {
    var button = document.querySelector('.submit-button');
    var input = document.querySelector('#input');

    button.addEventListener('click', onSubmitButtonClick);

    function onSubmitButtonClick(e) {
        e.preventDefault();
        console.log(input.value);
    }
})();
function parallelogramInput() {
    const base = parallelogramInputId('parallelogram-base');
    console.log(base);

    const height = parallelogramInputId('parallelogram-height');

    const aria = base * height ;

    const parallelogramAria = document.getElementById('parallelogram-aria')
    parallelogramAria.innerText = aria

}

function parallelogramInputId(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputValueText = inputFiled.value;
    const inputValue = parseFloat(inputValueText);
    inputFiled.value = '';
    return inputValue;
}


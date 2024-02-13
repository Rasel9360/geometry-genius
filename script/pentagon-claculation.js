function pentagonInput() {
    const pentagonPeri = pentagonInputId("pentagon-perimeter");
    const pentagonBase = pentagonInputId("pentagon-base");

    const aria = 0.50 * pentagonPeri * pentagonBase;

    const setPentagon = document.getElementById('set-pentagon');
    setPentagon.innerText = aria;
}

function pentagonInputId(inputFiledId) {
    const inputFiled = document.getElementById(inputFiledId);
    const inputText = inputFiled.value;
    const inputValue = parseFloat(inputText);
    inputFiled.value = "";
    return inputValue;
}
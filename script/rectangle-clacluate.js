function calculateRectangleAria() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidth);


    // Rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthInput.value;
    const length = parseFloat(rectangleLength);

    // Calculate Rectangle Aria
    const aria = width * length;

    // Display Rectangle  Aria in the screen
    const rectangleAria = document.getElementById('width-aria');
    rectangleAria.innerText = aria;

    rectangleLengthInput.value = '';

    rectangleWidthInput.value = '';
}
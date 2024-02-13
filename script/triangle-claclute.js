function calculateTriangleAria() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = triangleBaseInput.value;
    const base = parseFloat(triangleBase);
    
    // triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight);
    
    // Calculate Triangle Aria
    const aria = 0.5 * base * height
    

    // Display Triangle  Aria on the screen
    const triangleAria = document.getElementById('base-aria');
    triangleAria.innerText = aria

    triangleBaseInput.value = '';
    triangleHeightInput.value = '';
}
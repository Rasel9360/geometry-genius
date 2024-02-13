function ellipseInput() {
    const ellipseMajor = pentagonInputId('ellipse-major');
    const ellipseMinor = pentagonInputId('ellipse-minor');
    const aria = 3.14 * ellipseMajor * ellipseMinor;
    const ellipseAria = document.getElementById('set-ellipse');
    ellipseAria.innerText = aria;
}
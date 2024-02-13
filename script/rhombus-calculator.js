function rhombusInput() {
    const rhombusDia1 = pentagonInputId('rhombus-dia-1');
    const rhombusDia2 = pentagonInputId('rhombus-dia-2');
    console.log(rhombusDia1, rhombusDia2);
    const rhombusAria = 0.5 * rhombusDia1 * rhombusDia2;
    const setRhombusAria = document.getElementById('set-rhombus');
    setRhombusAria.innerText = rhombusAria;
    // const calculation = document.getElementById('calculation-container');
    // calculation.appendChild(setRhombusAria);
}


const card = document.getElementById('rectangle-container');
card.addEventListener('mouseover', function () {
    card.style.backgroundColor = 'pink';
})
card.addEventListener('mouseleave', function () {
    card.style.backgroundColor = 'white';
})



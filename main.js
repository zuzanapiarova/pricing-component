//TODO
// toggle button
//border-bottom weird
//section selected button and h1 on the same positions ? maybe put background onto section::after
const sections = [...document.querySelectorAll('section')];
const toggleButton = document.querySelector('input[type="checkbox"]');
const toggleField = document.querySelector('.toggle');
const toggleBall = document.querySelector('.ball');
let selectedPeriod;

let yearly;
let monthly;

function selectPlan(e){
    sections.forEach( section => {
        if(section !== e.currentTarget){
            section.className = '';
        } else {
            e.currentTarget.className = 'selected';
        }
    })
}

function togglePeriod(){
    let isChecked = toggleButton.checked;

    if(isChecked){
        toggleButton.checked = false;
        toggleBall.style.left = '4px';
        selectedPeriod = annually;
    } else {
        toggleButton.checked = true;
        toggleBall.style.left = '';
        selectedPeriod = monthly;
    }
}


toggleField.addEventListener('click', togglePeriod);
sections.forEach( section => section.addEventListener('click', selectPlan));
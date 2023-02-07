const sections = [...document.querySelectorAll('section')];
const prices = [...document.querySelectorAll('section h2')];
const toggleButton = document.querySelector('input[type="checkbox"]');
const toggleField = document.querySelector('.toggle');
const toggleBall = document.querySelector('.ball');
const learnMoreBtns = [...document.querySelectorAll('section button')];
let isChecked;
let annually;

function selectPlan(e){
       
    //so section is not changed when user clicks on learn more button in a different section
    for (let i = 0; i < learnMoreBtns.length; i++){
        if(e.target == learnMoreBtns[i]){
            return;
        }
    }

    sections.forEach( section => {
        if(section !== e.currentTarget){
            section.className = '';
        } else {
            e.currentTarget.className = 'selected';
        }
    })
}

function changePrice(){
    if(annually){
        prices[0].innerHTML = '<span>&dollar;</span> 199.99';
        prices[1].innerHTML = '<span>&dollar;</span> 249.99';
        prices[2].innerHTML = '<span>&dollar;</span> 399.99';
    } else {
        prices[0].innerHTML = '<span>&dollar;</span> 19.99';
        prices[1].innerHTML = '<span>&dollar;</span> 24.99';
        prices[2].innerHTML = '<span>&dollar;</span> 39.99';
    }
}

function togglePeriod(e){

    //true is left, false is right
    isChecked = toggleButton.checked;
    annually = isChecked;
    console.log(isChecked, annually);

    if(isChecked){
        toggleButton.checked = false;
        toggleBall.style.left = '4px';
        document.querySelector('.annually').style.color = '#666666';
        document.querySelector('.monthly').style.color = 'lightgray';
    } else {
        toggleButton.checked = true;
        toggleBall.style.left = '34px';
        document.querySelector('.monthly').style.color = '#666666';
        document.querySelector('.annually').style.color = 'lightgray';
    }

    changePrice();
}

toggleField.addEventListener('click', togglePeriod);
sections.forEach( section => section.addEventListener('click', selectPlan));
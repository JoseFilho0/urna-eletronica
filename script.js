let yourVoteFor = document.querySelector('.division-top--text1 span');
let position = document.querySelector('.division-top--text2 span');
let moreInfos = document.querySelector('.division-top--moreInfos');
let warn = document.querySelector('.division--bottom');
let side = document.querySelector('.division-top--img');
let numbers = document.querySelector('.division-top--number');

let currentStage = 0;
let digitNumber = '';

function startStage() {
    let stage = etapas[currentStage];
    let numberHtml = '';

    for(let i = 0; i < stage.numeros; i++) {
        if(i === 0) {
            numberHtml += '<div class="number blinks"></div>';
        }
        numberHtml += '<div class="number"></div>';
    }

    yourVoteFor.style.display = 'none';
    position.innerHTML = stage.titulo;
    moreInfos.innerHTML= '';
    warn.style.display = 'none';
    side.innerHTML = '';
    numbers.innerHTML = numberHtml;
}

function updateInterface() {
    alert('finalizou')
}

function clicked(n) {
    let elNumber = document.querySelector('.number.blinks');
    if(elNumber !== null) {
        elNumber.innerHTML = n;
        digitNumber = `${digitNumber}${n}`

        elNumber.classList.remove('blinks');
        if(elNumber.nextElementSibling !== null) {
            elNumber.nextElementSibling.classList.add('blinks')
        } else {
            updateInterface();
        }
    }
}
function white() {
    alert('Clicou em branco')
}

function correct() {
    alert('Clicou em corrige')
}

function confirm() {
    alert('Clicou em confirma')
}

startStage();